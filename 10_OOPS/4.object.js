// Statement: function is also an object
function myFun(num){
    return num * 5
}
// myFun.power = 2 // assigning value in the function just like an object

// console.log(myFun(5))
// console.log(myFun.prototype) // Output: {} // empty object
// console.log(myFun.power)


// .this = current context =  jisne bulaya uske paas jao 
// new = create new instance or else you will be manupulating the same object =

function createUser(username, score){
    this.username = username // username parameter value , get store as username : "value" inside object
    this.score = score
    console.log(`createUser funtion() context : ${this}`)
}

// injecting increment function inside creatUser
createUser.prototype.increment = function(){
     this.score++
     console.log(`increment context : ${this}`)
}

createUser.prototype.printMe = function(){
     console.log(`Score is ${this.score} for ${this.username}`)
     console.log(`printMe context : ${this}`)
}

// without "new" keyword  Erorr: TypeError: Cannot read properties of undefined (reading 'printMe')   
const userAniket = new createUser("aniket", 50)  // It will create a new instance for the arguments
// const userJai = createUser("jai", 70) // 
console.log(userAniket); // isme object hai 
// userAniket.increment()
// userAniket.printMe()

/*
  ######### 'NEW' KEYWORDS NOTES ############


Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.



*/
