// for each

const myArray =["aniket", "jay", "sanjay", "kajal", "govind", "vidya"]

// 1. NORMAL FUNCTION
// callback function do not have a name.
myArray.forEach(function (name){
    //  console.log(name)
})

// 2. ARROW FUNCTION
myArray.forEach( (name)=>{
    // console.log(name)
})

// myArray.forEach( (name)=>(console.log(name))) // not readable

// 3. USING DEFINED FUNCTION.


// myArray.forEach(iterate()) // Error : undefined is not a function

myArray.forEach(iterate) // Just pass the reference ; Dont execute the function like in the above line.

function iterate(name){  
    // console.log(name)
}

// Using Additional forEach parameters

myArray.forEach( (name, index, myArray)=>{
    // console.log(name, index, myArray)
})


// Objects inside Array

const objectsInsideArray = [
    {
        name : "aniket",
        age : 23
    },
    {
        name : "rohan",
        age : 32
    },
    {
        name : "dinesh",
        age : 12
    },
    {
        name : "chotu",
        age : 56
    },

]

objectsInsideArray.forEach((obj)=>{
     console.log(obj.name)
})



