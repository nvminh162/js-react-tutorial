// 1. Let, const

/**
 * var / let, const: scope, hosting
 * const / var, let: assignment
 */

// 2. Template literals
// 3. Multi-line strings
// 4. Arrow functions
// 5. Classes
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameters

var arrays = ['JS', 'PHP', 'Ruby']

//normal
var a1 = arrays[0]
var b1 = arrays[1]
var c1 = arrays[2]
console.log(a1, b1, c1)

//distructuring assignment => bỏ trống để next phần tử đó
var [a2, , ...rest2] = arrays
console.log(a2, rest2)

var course = {
    nameCourse: 'Javascript',
    priceCourse: 1000,
    // description: 'Khoá cơ bản',
    imageCourse: 'img-path/images/js',
    children: {
        nameCourse: 'ReactJS',
        priceCourse: 1200,
        description: 'Khoá nâng cao',
        imageCourse: 'img-path/images/reactjs'
    }
}

var { nameCourse: nameCourseParent, description = 'Chưa có mô tả', children: { nameCourse: nameCourseChildren }, ...rest3 } = course
console.log(nameCourseParent, nameCourseChildren)
console.log(description)
console.log(rest3)

//Example console.log
console.log(1, 2, 3, 4, 5, 6);

var myLogger1 = (...param) => { //tham số vào trả về is array
    console.log(param);
}

console.log(myLogger1(1, 2, 3, 4, 5, 6));

var myLogger2 = ({ names, price, ...rest }) => { //tham số vào trả về is array
    console.log(names);
    console.log(price);
    console.log(rest);
}
myLogger2({
    names: 'JS',
    price: 1000,
    description1: 'Khoá cơ bản1',
    description2: 'Khoá cơ bản2'
})

var myLogger3 = ([a, b, ...rest]) => { //tham số vào trả về is array
    console.log(a);
    console.log(b);
    console.log(rest);
}
myLogger3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) //get 2 phần tử console log và mảng rest còn lại

// 9. Spread syntax (Phá dấu array object)

var arr1 = ['JS', 'CSS', 'JSX', 'CSSX']
var arr2 = ['HTML', 'Ruby', 'PHP']
var arr3 = [...arr2, ...arr1]
console.log(arr3);

var obj1 = { name6: 'JS' }
var obj2 = { price6: 1000 }
var obj3 = { escription6: 'Mô tả' }
var obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4);

var defaultConfig = {
    api: 'http://localhost:127.0.1',
    apiVer: 'v1',
    other: 'other'
}
var exerciseConfig = {
    ...defaultConfig,
    api: 'http://localhost:8080' // trung key api ghi đè default api
}
console.log(exerciseConfig)

var arrayExample = ['JS', 'CSS', 'JSX', 'HTML', 'PHP']
var logger6 = (...rest) => {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}
logger6(...arrayExample)

// 10. Enhanced object literals
// 11. Tagged template literals

var brand = 'F8'
var course8 = 'JavaScript'

var highLight0 = ([first, ...strings], ...value) => {
    console.log('first', first);
    console.log('strings', strings);
    console.log('value', value);
}
highLight0`Học lập trình ${course8} tại ${brand}!`

var highLight = ([first, ...strings], ...values) => {
    return values.reduce((acc, curr) =>
        [...acc, `<span>${curr}</span>`, strings.shift()],
        [first]
    ).join('')
}
let htmls = highLight`Học lập trình ${course8} tại ${brand}!`
console.log(htmls);

// 12. Modules


// Babel