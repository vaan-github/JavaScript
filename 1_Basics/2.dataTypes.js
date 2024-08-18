
"use strict"; // treat all JS code as newer version.

// alert( 3 + 3)  // ReferenceError: alert is not defined. we are using nodejs, not browser.

// console.log(
// 3 +
// 3
// ); console.log() // run but not user friendly during reading;


let name =  "aniket"  // string datatype
let age = 22 // number datatype
let isLoggedIn = false // boolean datatype

/*
      PREMITIVE DATATYPES
*/

// number => 2^53 range
// bigint
// string => "" ''
// boolean => true / false
// null => standalone value  (representation for empty)
let temperature = null // since we cant put 0 full no value because 0 degree is a value in temp.
// undefined => declare a variable but not set any value
// symbol => unique

/*
     NON PREMITIVE DATATYPES
*/

//object

// console.log(typeof null) // answer is **object**
// console.log(typeof undefined) // answer is undefined

// Primitive data type = Call by value

// String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol('123')
// const anotherId= Symbol('123') 
// // console.log(id===anotherId) //false
// console.log(id==anotherId) //false

// const bigNumber = 6587264647349827846239479478329n //bigint
// console.log(typeof bigNumber)


// Non-Primitive datatype = Call by reference

// Array, Objects, Functions

//Array
const heroes = ['shaktimaan', 'nagin']

//Objects
let myObj = {
      name: "aniket",
      age: 12
}

//Functions

//define function
const myfun = function(){
   console.log('hello function')
}
// myfun() // call function