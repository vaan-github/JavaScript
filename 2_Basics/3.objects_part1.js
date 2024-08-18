/*  There are two way to declare object   
       1. literal     Example :  const myObj ={}
       2. constructor => (singleton)   Example : Object.create

*/

// ############################## literals Objects #######################################

// key : 'value'  ,actually both are string system sees it as this  'key' : 'value'

//Creating Symbol

const mySym = Symbol('This is a description (myKey)')


// Creating Object literal
const jsUser = {
    name : 'aniket',
    'full name' : 'aniket varma',
    [mySym] : 'This is a Unique key',
    mySym : 'this is not a Symbol',
    age : 23,
    location : 'Mumbai',
    email : 'vaan.origin@gmail.com',
    isLoggedIn : false,
    lastLoginDays : ['Monday','Thursday']

}

// Accessing Object 

// 1st way
// console.log(jsUser.name) // unable to access 'full name' using this method

// 2nd way
// console.log(jsUser['full name'])

// console.log(jsUser[mySym]) // Accesing Symbol data-type.
// console.log( jsUser.mySym) // Accesing data-type  which is not a symbol.

jsUser.age = 20
// console.log(jsUser)

// THIS WILL FREEZE THE DATA MANIPULATION
// Object.freeze(jsUser)

// jsUser.email = 'aniket@gmail.com'
// console.log(jsUser) // no changes to object after freeze

// Adding functions in Object

jsUser.greeting = function(){
    // console.log(`Hello ${jsUser['full name']}`)
    // console.log(this["full name"])  //********  'this' keyword *********
}

// console.log(jsUser.greeting) // Output : [Function (anonymous)] ==> this is not a function return, but a function reference(function not executed)
// console.log(jsUser.greeting()) // Output : Hello User undefined








