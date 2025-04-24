// Array JavaScript ----------------------------------------------------------
// forEach()
// every()
// some()
// find()
// filter()
// map()
// reduce()

var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 0
    },
    {
        id: 2,
        name: 'Java',
        coin: 100
    },
    {
        id: 3,
        name: 'ReactJS',
        coin: 200
    },
    {
        id: 4,
        name: 'Python',
        coin: 50
    },
    {
        id: 5,
        name: 'C++',
        coin: 0
    },
    {
        id: 6,
        name: 'ReactJS',
        coin: 200
    }
]

// ForEach: duyệt và lấy ra từng phần tử => KHÔNG RETURN
courses.forEach((value, index, array) => {
    console.log(index)
    console.log(value)
    console.log(array)
})

// Every: kiểm tra nhiều phần tử phải thoả mãn điều kiện => GÁN GIÁ TRỊ ĐỂ RETURN VỀ BOOLEAN
var isFree = courses.every((value, index, array) => {
    return value.coin === 0
})
console.log(isFree)

// Some: kiểm tra 1 phần tử thoả mãn điều kiện => GÁN GIÁ TRỊ ĐỂ RETURN VỀ BOOLEAN
var isExsistFree = courses.some((value, index, array) => {
    return value.coin === 0
})
console.log(isExsistFree)

// Find: kiểm tra 1 phần tử thoả mãn điều kiện => GÁN GIÁ TRỊ ĐỂ RETURN VỀ 1 Object thoả
var findCourse = courses.find((value, index, obj) => {
    return value.name === 'ReactJS'
})
console.log(findCourse)

// Filter: kiểm tra nhiều phần tử thoả mãn điều kiện => GÁN GIÁ TRỊ ĐỂ RETURN VỀ 1 array thoả
var filterCourses = courses.filter((value, index, array) => {
    return value.name === 'ReactJS'
})
console.log(filterCourses)

// Map: Thay đổi render lại giá trị key: value => RETURN new Array
var newCourses = courses.map((value, index, array) => {
    return {
        index: index,
        id: value.id,
        name: `Khoá ${value.name}`,
        coin: value.coin,
        origin: array
    }
})
console.log(newCourses)

// Reduce: Tính toán (thường dùng để tính phần tử duyệt qua mảng)
// đối số initiaValue có 2 cách truyền
// + Truyền giá trị phải giống với ouput VD: muốn tính number thì khởi tạo phải truyền number
// + Không truyền giá trị thì lấy phần tử PHẢI CÙNG KIỂU DỮ LIỆU làm khởi tạo và duyệt tiếp từ phần tử thứ 2 cho đến hết

//TH1: có truyền tham số inititalValue = 0
var totalCoin = courses.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue += currentValue.coin
}, 0)
console.log(totalCoin)

//TH2: không truyền tham số inititalValue 
// => lấy giá trị đầu tiên PHẢI CÙNG KIỂU DỮ LIỆU được gán trong tính toán để khởi tạo và duyệt tiếp từ phần tử thứ 2 cho đến hết
var coinFake = [8, 9, 9, 0, 0, 8]
var totalCoin = coinFake.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue += currentValue
})
console.log(totalCoin)

// Thực hành String/Array includes() method
var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];
function checkCar(cars) {
    return cars.includes('Mercedes', 0);
}

console.log(checkCar(cars));

//----------------------------------------------------------------------------------
//promise()

// Promise.resolve
// Promise.reject

//TH1 có xử lý logic
var sleep1 = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(1), ms)
        // setTimeout(reject('co loi'), ms)
    })
}

// TH2 trả về trực tiếp
var sleep2 = (ms) => {
    return Promise.reject('Co loi xay ra')
}

sleep1(2000)
    .then((data) => {
        return data + 1
    })
    .then((data) => {
        return data + 1
    })
    .then((data) => {
        return data + 1
    })
    .then((data) => {
        return data + 1
    })
    .then((data) => {
        return data + 1
    })
    .then((data) => {
        console.log(data)
    })
    .catch((erorr) => {
        console.log(erorr)
    })
    .finally(() => {
        console.log('End')
    })

// Promise.all
var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4])
    }, 2000)
})

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([5, 6, 7, 8])
    }, 3000)
})

// var promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Failure')
//     }, 2000)
// })

Promise.all([promise1, promise2]) //truyền vào mảng
    .then((result) => {
        console.log(result[0].concat(result[1]))

    })
    // .then(([promise1, promise2]) => {
    //     console.log(promise1.concat(promise2))

    // })
    .catch((result) => {
        console.log(result)
    })
    .finally(() => {
        console.log('End')
    })