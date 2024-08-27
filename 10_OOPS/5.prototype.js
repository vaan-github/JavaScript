// #Method = function to cause something happen to the object.
// #Property = returns the information about the object.

// Prototype

/*
   #Useful facts

  1. The difference between `__proto__` and `prototype` is simple: `__proto__` is a property of an object instance, while `prototype` is a property of a constructor function.

  2. Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

  3. __proto__= is a very slow operation as it breaks internal optimizations for object property access operations. So avoid it unless you know what you're doing, or JavaScript speed totally doesn't matter for you.

  4. A constructor is a pointer. It points to the Function() that created the point from which you are retrieving the constructor from. The keyword prototype is a property of Function() objects. No other type of objects have this property.

  5. Prototype programming is a type of object oriented programming in which there are no classes. proto is simple yet retains the object oriented features of delegation (the prototype counterpart to inheritance) and object oriented dispatch.

  6. Prototype is a JavaScript framework that aims to ease development of dynamic web applications. It offers a familiar class-style OO framework, extensive Ajax support, higher-order programming constructs, and easy DOM manipulation.

  7. What is [[Prototype]]?
Note: Following the ECMAScript standard, the notation someObject.[[Prototype]] is used to designate the prototype of someObject . The [[Prototype]] internal slot can be accessed and modified with the Object.getPrototypeOf() and Object.setPrototypeOf() functions respectively.

  8. __proto__ : The __proto__ property is a way to directly access the prototype of an object. Although its use is discouraged in production, it helps visualize the prototype pipeline. Creating Inheritance: You can create inheritance in JavaScript in several ways.

  9. $() The $() function is shorthand for the getElementByID method,


*/


// goal 
let myName = "    aniket"
// console.log(myName.trueLength) // trueLength will give me actual string lenght i.e alternative for myName.trim().length

// console.log(myName.trim().length) 

// Let starts with some testing

const myHeroesArray = ["thor", "spiderman"]

const myHeroesObject = {
  thor : "hammer",
  spiderman : "sling-shot",
  getSpiderPower : function(){
    console.log(`spidy power is ${this.spiderman}`)
  }
}

// now listen
/*
  see the image in this link :https://github.com/vaan-github/JavaScript/blob/main/zNOTES/1.ImagesNotes/5.EverthingIsObject.png?raw=true

  1. everything is passing through an object .
  2. So what if we inject the property inside an object.
  3. since, it is the parent object .string,function, child object all have that property.
*/

// Injecting a property inside parent Object
Object.prototype.aniket = function(){
  console.log(`Aniket is everywhere`)
}

// it works
// myHeroesArray.aniket() 
// myHeroesObject.aniket()

// Injecting inside parent Array
Array.prototype.aniketArray = function(){
  console.log(`Aniket is only available for array only.`)
}

// myHeroesObject.aniketArray() // this will throw error.
myHeroesArray.aniketArray()





