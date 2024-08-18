// Array 

// Array is an object which can store different data-types in a contagious memory location.
// JavaScript Array is resizeable
// Array index start with zero

// shallow copy = heap = same reference point.
// deep copy = stack = do not share the same reference point.

// create the array in the browser console you will see 2 prototype function.


// declaring the array.
const myArray = [1, "aniket", {name: "aniket", age:12}, true, [1, 2, 3]]
// traverse the array using a function
// this is just a rough fuction coz i have yet to learn it.
let traverse = (Array) =>{
for(i=0; i<Array.length; i++){
    console.log(Array[i])
} 
console.log(`Array Length : ${Array.length}`)
}
// traverse(myArray)  // calling function.
// Array Methods
// myArray.push(6) // add element at the end in array
// traverse(myArray)
// myArray.pop(6) // remove element at the last in array
// traverse(myArray)
// myArray.unshift("unshift-element") // add element at the start in the array by shifting which will put a load on the cpu during large data shift.

// myArray.shift()  //shift the element to the left and delete the shifted element at the moving end.

// search the element and return boolean value
// console.log(myArray.includes("aniket")) // unable to recognize array and object

// search the element and return index number of that element.  -1 = not found
// console.log(myArray.indexOf("aniket"))

const newArray = myArray.join();
// console.log(newArray) // 1,aniket,[object Object],true,1,2,3    *** Result *** // convert to the string.
// console.log(myArray)

// slice and splice 
// Range (0,3) means 0,1,2 index

const arraySlice = [1, 2, 3, 4, 5]
console.log(arraySlice.slice(0,3)) // [ 1, 2, 3 ]
console.log(arraySlice) // [ 1, 2, 3, 4, 5 ] array is not manipulatedd.
console.log("-------------------")
const arraySplice = [1, 2, 3, 4, 5] 
console.log(arraySplice.splice(0,3)) // [ 1, 2, 3 ]
console.log(arraySplice) // [ 4, 5 ]  value got removed , Array manipulated


// traverse(myArray)

