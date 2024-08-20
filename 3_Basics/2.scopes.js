//    ################### SCOPE #####################


// Global Scope = This cannot use the variables of the block scope
let a = 100;
const b = 200;
var c = 300;  // do not learn about var .

{
    // Block Scope = This can use the varibles from global scope.
    var c = 30;
    let a = 20;
    // console.log(`Inner : ${a}`)
}

// var dont follow scope and confuse programmer . Hence no one use var to declare variable.
// console.log(c)  // Output : 30 , We all expected it to be 300.
// console.log(`Outer : ${a}`) 

// Browser Scope and Node.js Scope are different

// ### Scope in Nesting 

// Function 

function parent(){
    let icecream = "Parent Ice-Cream"
    function child(){
        let toy = "Child Toy"
        console.log(icecream) // Child will take the icecream of the parent.
    }
    child() // Calling of the child should done inside parent function.
    // console.log(toy)  // Child will not give toy to the parent 
}
// child() 
// parent() // NOTE : CALLING OF FUNCTION SHOULD DONE OUTSIDE THE FUNCTION DEFINITION.
// child()


// Conditional Statement
const username = "aniket"
if (username === "aniket"){
      const password = "123"
    if (password === "123"){
        const info = "This is secret"
        // console.log(info)
    }
}
// console.log(info) // Error : info is not defined 


// ################## INTERESTING ##########################


// Simple Function Definition
function addOne(num){
    return num + 1
}

console.log(addOne(1))




// console.log(addTwo(1)) // Error : ReferenceError: Cannot access 'addTwo' before initialization
// Define Function using Variable 
const addTwo = function(num){ // addTwo is sometime called expression.
    return num + 2
}

console.log(addTwo(1)) // ## NOTE : CALLING SHOULD ONLY DONE AFTER FUNCTION DEFIINING.

