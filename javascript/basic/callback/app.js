var myFunction = value => {
    value('la xin chao')
}

var myCallback = value => {
    console.log(value)
}

myFunction(myCallback)