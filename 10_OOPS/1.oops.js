// Object literal : basic unit
const userObj = {
    name : "aniket",
    age : 22,
    greeting : function (){
        console.log(userObj.name)
        console.log(this.name)
        console.log(this)
    }
}

// console.log(userObj.greeting())
// console.log(userObj.greeting) // give only reference
// console.log(this)

//##############################
// Constructor
// new keyword is a constructor
// 'new' : Step 1 : Empty Object got created .{} also known as instance.
//       Step 2 : Constructor function got called due to new keyword.It will pack arguments,etc and return it.
//       Step 3 : '.this' keyword inject the argument in the Object.
//       Step 4 : we got our object in the function and return it 
function user(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = ()=>{
        console.log(`Greeting ${this.username}`)
    }

    return this // it is got implicitly define when we use new keyword.
}


// In this  function I got the hint of why i getting undefined in the end
const userOne = user("aniket", 2, true)
const userTwo = user("jay", 2, true)
// console.log(userOne) // object got overwrite

// to solve this issue use new keyword
const userThree = new user("sanjay",3,false)
// console.log(userOne)
// console.log(userThree)


const checking = (aniket)=>{
    this.aniket = aniket
    // console.log(this)
    return this // if function return something you wont get undefined.
}
// console.log(checking);
// console.log(checking("my name")); // returns the object.


//##############################
// Constructor is the reference function.
// It is the reference of your define function only.
// for e.g.

console.log(userOne.constructor)


//#######################
// instanceof : an operator use to check the instance of the constructor
// object instanceof constructor
// (the object to test) instanceof (constructor to test against)

console.log(userOne instanceof user) // do not use "new" keyword. so, no instance created .Hence, false
console.log(userThree instanceof user) // uses "new" keyword to create instance. Hence, true.