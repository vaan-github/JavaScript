//  to refer current context , we uses *** this *** key word. 
const user = {
    username : "aniket",
    price : 400,

    greeting : function(){
        console.log(`${this.username} , Welcome to the JavaScript`)  // without this.  ,it will see it as a variable which needed to be declared or pass through an argument.
        console.log(this);
    }
}
// console.log(user.greeting) // this console_log proves why we uses parentheses in greeting.
// user.greeting() 

user.username = "jay" // change the context.
// user.greeting()
// console.log(this); // Output : {} ,  This is an empty object.

// @@@@@  NOTE : this in node.js is an empty object , this in browser is a window object.


// @@@@@@ NOTE : UNABLE TO USE THIS KEYWORD INSIDE THE FUNCTION.
function thisNotAllowed(){
    let username = "aniket"
    console.log(this.username)
}
// thisNotAllowed() // as you can see we can unable to access the this keyword


// ############## STRUCTURE OF FUNCTION #######################

// 1. NORMAL FUNCTION
function normalFunction(){
    console.log(`I am normal function`)
    console.log(this) //  Output: <ref *1> Object [global] {global: [Circular *1],...., crypto: [Getter]}
}
// normalFunction()

// 2. EXPRESSION FUNCTION
const expressionFunction = function(){
    console.log(`I am expression function`)
    console.log(this)  //  Output: <ref *1> Object [global] {global: [Circular *1],...., crypto: [Getter]}
}
// expressionFunction()

// 3. ARROW FUNCTION

// Basic Arrow Function.
const arrowFunction = () => {
    console.log(`I am arrow function`)
    console.log(this) // Output : {}
}
// arrowFunction()

// Implicit RETURN
const implicitReturn = (num1, num2) => num1 + num2  // no need to write return syntax.

// {} means return syntax is needed to return value .
// () means return syntax in not needed. This is used in react
const useInReactjs = (num1, num2) => (num1 + num2)
// console.log(useInReactjs(2, 3))
// console.log(implicitReturn(1, 2))  // Input : no argument Output : NaN

// ## REAL USE OF PARENTHESES TO RETURN VALUE.

const returnObject = () => ({username : 'aniket'}) // Without parentheses we cant return an object.
// console.log(returnObject())


// console.log(console.log("nested "))  // Output : nested console  // in new line  : undefineduser.greeting 