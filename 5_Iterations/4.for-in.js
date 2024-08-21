// for in : iterates on the keys.


// for-in loop for Object
const myObj = {
   "full name" : "aniket varma",
    age : 23,
    work : "Kar lunga ek din"
}

for (const key in myObj) {
    // console.log(`${key}  ${myObj[key]}`)     
    }

    // console.log(myObj.age)
    // console.log(myObj["full name"])


// for-in loop for Array

// {keys : index , values : data} ===> in Array 
const myArray =["aniket", "jay", "sanjay", "kajal", "govind", "vidya"]

for (const key in myArray) {
    // console.log(key) // got the array length
    // console.log(`${key}  ${myArray[key]}`)
        
    }



// Maps cannot use for-in 
// not iterable 

    const map = new Map() // map is an object in .js

    map.set("IN", "India")
    map.set("USA", "United States of America")
    map.set("FR", "France")
    map.set("in", "India")
    map.set("IN", "India-Updated")
    // console.log(map)

    for (const [key,value] in map) {
        console.log([key,value])
            
        }
    
