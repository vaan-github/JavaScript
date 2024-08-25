// +++++++++++++++++++++++ NUMS +++++++++++++++++++++++++++++++++ //
const score = 100;

const marks = new Number(100)  // specifically define the data type

// console.log(score)
// console.log(marks)

// console.log(typeof (marks.toString())) // convert to string

// console.log(marks.toFixed(1))  // for precision 100.0


const marks1 = 99.9999
// console.log(marks1.toPrecision(4))  //round-off  100.0

const money = 10000000
// console.log(money.toLocaleString("en-IN"))  //  commas according to indian standards


// ++++++++++++++++++++++++++ MATH Library ++++++++++++++++++++++++ //

// console.log(Math)

// console.log(Math.abs(-4)) //absolute 

// console.table([Math.round(4.6), Math.ceil(4.1), Math.floor(4.9)])

// console.table([Math.min(1,2,3,4), Math.max(1,2,3,4)])  


// Math.random
// gives random value between 0-1

// console.log(Math.floor((Math.random()) * 10)) // range is 0-9

// building a dice game (1-6) is the range
const min = 1
const max = 6
/** 
 * (max - min + 1) 
 */

console.log(Math.floor((Math.random() * (max - min + 1)) + min)) // range is 1-6 
// console.log(Math.floor((Math.random() * (max - min + 1)))) // range is 0-5
// console.log(Math.floor((Math.random() * (max - min)))) // range is 0-4

