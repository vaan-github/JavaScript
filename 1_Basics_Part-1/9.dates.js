// Dates  (Temporal API is still in development Hence we using the old ways)

const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toString())

// console.log(typeof myDate)

// const myNewDate = new Date("10/10/2023")
// const myNewDate = new Date("10-10-2023")
// const myNewDate = new Date("2023-01-19") // yyyy-mm-dd  01 is jan   // USA standard
const myNewDate = new Date(2024, 7, 18, 15, 58, 40, 998 ) // yyyy-mm-dd hr-min-sec-milisec  0 is january
// console.log(myNewDate.toString())
// console.log(myNewDate.toLocaleString()) // Indian Standard


// timeStamp

// Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
let myTimeStamp = Date.now()  // if we add new key word then TypeError: Date.now is not a constructor
// console.log(Math.floor(myTimeStamp/(1000*60*60*24*365))) // rough years
// console.log(myTimeStamp)
// // console.log(2023-54)
// console.log(myNewDate.getTime())
// console.log(((myTimeStamp - myNewDate)/1000)/60)

let date2 = new Date()
console.log(`the month number is ${date2.getMonth() + 1}`)


const helloDate = date2.toLocaleString( 'default', {
    weekday: 'short'

})

console.log(helloDate)

