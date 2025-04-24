//#1. callback - callback hell
function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

httpGetAsync("https://picsum.photos/200/300", (data) => {
  // console.log(data);
  document.getElementById("img_1").setAttribute("src", data.responseURL);
  httpGetAsync("https://picsum.photos/200/300", (data) => {
    document.getElementById("img_2").setAttribute("src", data.responseURL);
    httpGetAsync("https://picsum.photos/200/300", (data) => {
      document.getElementById("img_3").setAttribute("src", data.responseURL);
    });
  });
});
//----------------------------------------------------------------------

//#2. Promise
const currentPromise = new Promise((resolve, reject) => {
  let condition = true; //options
  if (condition) {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("Erorr");
    }, 3000);
  }
});

currentPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
//----------------------------------------------------------------------
//#3. solving the callback hell problem
function httpGetAsync2(theUrl, resolve, reject) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4) {
      if (xmlHttp.status == 200) {
        resolve(xmlHttp);
      } else {
        reject(new Error(`HTTP request failed with status ${xmlHttp.status}`));
      }
    }
  };
  xmlHttp.onerror = function () {
    reject(new Error("Network error occurred"));
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

const promise1 = new Promise((resolve, reject) => {
  httpGetAsync2("https://picsum.photos/200/300", resolve, reject);
});
const promise2 = new Promise((resolve, reject) => {
  httpGetAsync2("https://picsum.photos/200/300", resolve, reject);
});
const promise3 = new Promise((resolve, reject) => {
  httpGetAsync2("https://picsum.photos/200/300", resolve, reject);
});

promise1
  .then((data) => {
    document.getElementById("img_4").setAttribute("src", data.responseURL);
    return promise2;
  })
  .then((data) => {
    document.getElementById("img_5").setAttribute("src", data.responseURL);
    return promise3;
  })
  .then((data) => {
    document.getElementById("img_6").setAttribute("src", data.responseURL);
  })
  .catch((err) => {
    console.log("Error occurred:", err);
  });
//----------------------------------------------------------------------
//#4. async / await
function httpGetAsync3(theUrl, resolve, reject) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4) {
      if (xmlHttp.status == 200) {
        resolve(xmlHttp);
      } else {
        reject(new Error(`HTTP request failed with status ${xmlHttp.status}`));
      }
    }
  };
  xmlHttp.onerror = function () {
    reject(new Error("Network error occurred"));
  };
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

const promise4 = new Promise((resolve, reject) => {
  httpGetAsync3("https://apiwsum.photos/200/300", resolve, reject);
});
const promise5 = new Promise((resolve, reject) => {
  httpGetAsync3("https://picsum.photos/200/300", resolve, reject);
});
const promise6 = new Promise((resolve, reject) => {
  httpGetAsync3("https://picsum.photos/200/300", resolve, reject);
});

const executeAsync = async () => {
  try {
    const response1 = await promise4;
    document.getElementById("img_7").setAttribute("src", response1.responseURL);
    const response2 = await promise5;
    document.getElementById("img_8").setAttribute("src", response2.responseURL);
    const response3 = await promise6;
    document.getElementById("img_9").setAttribute("src", response3.responseURL);
  } catch (error) {
    console.log('Lỗi tải ảnh', {error});
  }
};
executeAsync();
//----------------------------------------------------------------------
