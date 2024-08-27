// Can we change the value of the PI??

// console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)

/*
### The why we cant change the value of PI.
### It hardcoded in C++ V8 Engine.

  {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

*/

// can we give the PI like property description to our own property.

// 1st way to create obj
// const myNewObj = Object.create(null)

// 2nd way

const chai = {
    name : "ginger tea",
    price : 250,
    isAvailable : true,
    transaction : function(){}
}

const chaiDescriptor = Object.getOwnPropertyDescriptors(chai,'name')

// console.log(chaiDescriptor)

// defining the property for my chai

Object.defineProperty(chai,'name', { 
    //this will make "name" to not get traversed during looping.
    enumerable: false
})

// for (let [key,value] of chai) { // error : TypeError: chai is not iterable
//     console.log(key,value);
    
// }

for (let [key,value] of Object.entries(chai)) {
    if (typeof value != 'function'){ // fixed the error
    console.log(key,value);
    }
}
