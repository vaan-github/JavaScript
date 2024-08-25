// Modern String Features

// backticks ``   , advantage is string interpolation where we create place holders.

let myObj = {
    name: 'aniket',
    age: 23
}
// console.log(`hello my name is ${myObj.name} and i am ${myObj.age} old`)

// using String object in javascript and uses its constructor to create string.

const name = new String("aniket")
// console.log(name)   // store as key: value   { 0: a, 1:n ,,,,;}+

// console.log(name[0])
// console.log(name.__proto__) // returns object
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(4))
// console.log(name.indexOf('e'))

const newName = name.substring(0,4) // 4 is not included
// console.log(newName)
// console.log(name.slice(-5,4)) // it is same as substring but with additional features

const new1Name = "    aniket    "
// console.log(new1Name)
// console.log(new1Name.trim())

const url = "https://aniket.com/aniket%20varma" // %20 represent space in url
// console.log(url.replace("%20","-"))
// console.log(url.includes("aniket"))

const naam = "aniket-govind-varma" // split(separator,limit)
console.log(naam.split("-"))

