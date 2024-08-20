
//################## FUNCTIONS IN JS. ########################

// Simple function

// Declaring the function
function myFirst(){
    // Scope of function
    console.log("Hello")
}

// console.log(myFirst) // Reference of the function, Output : [Function: myFirst]  
// myFirst() // Execution of the function

// Nomenclature in function.

function functionName(parameter1,parameter2){
    //Scope of the function

    // comment out the return statement and uncomment the console.log inside function to test withoutReturnStatement

    // console.log(`This is how ${parameter1} and ${parameter2} passes through parameters`)
    // const returnResult = `This is how ${parameter1} and ${parameter2} passes through parameters`
    // return returnResult
    // console.log("After return, no code is executed inside function")

    // direct return, alternate method
     return `This is how ${parameter1} and ${parameter2} passes through parameters`
}

// functionName("argument1","argument2") 

// const withoutReturnStatement = functionName() // Output : This is how undefined and undefined passes through parameters

// console.log(withoutReturnStatement) // Output : undefined

//  const withReturnStatement = functionName("argument1","argument2") // no argument passed then return will be undefined.
// console.log(withReturnStatement)

function greeting(username){  // username = " PC"  // to use assigned value if no argument is passed.
    if (!username){    //  username === undefined
        return `Enter username`  // if condition boolean is true
    }
    return `hello ${username}`

}

// console.log(greeting("aniket"))


// ... ==> This Operator named as Rest Operator / Spread Operator based on useCases.

function shoppingCart(id, ...amount){ // Spread Operator to store multiple arguments.
    return amount
}

// console.log(shoppingCart(100, 200, 300)) // Output : [200, 300 ]

// Passing Object as an Argument

const myObj = {
    name : "aniket",
    age : 19
}

function passObj(anyObject){
    console.log(`This is ${anyObject.name} and my age is ${anyObject.age}`)
}

// passObj(myObj) // pass obj variable
// passObj({      // pass obj directly
//     name : "jay",
//     age : 12
// })


// Passing Array as an Argument

const myArray = [1, 2, 3, 4]

function passArray(anyArray){
    return anyArray[1]
}

// console.log(passArray(myArray))
// console.log(passArray([199, 324, 5354])) 






