// for of : iterates on the values.


// const iterator : initialization 
// object : array, object, strings,etc

// for (const iterator of object) {   
//     //code
// }

// Array
const number = [1, 2, 3, 4, 5]

for (const num of number) { 
    // console.log(num)
    
}

// String

const greeting = "H  el  lo A  ni ket "

for (const greet of greeting) {
    if (greet == " "){ // this code detect and remove spaces
        continue
    }
    // console.log(greet)
    
}

// #################### Maps #####################################

// Definition : The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.Unique key only and the value will be updated if two same key is available with different value.

// ########## Keys are Same , Values are different ===> Updated  ###########
// "in", "india"
// "in", "india-updated"   
// Output : "in" => "india-updated"

// ######### Values are Same, keys are different ====> Inserted ##########
// "in", "india"
// "In", "india"   
// Output : "in" => "india-updated" 
//          "In" => "india"
 

const map = new Map() // map is an object in .js

map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("in", "India")
map.set("IN", "India-Updated")
// console.log(map)

// Printing the map using for-of 

for (const [key, value] of map) {  // destructoring of the array, since the "map" returns "array" in "for-of" loop 
    // console.log(`Country Code : ${key}    |    Country Name : ${value}`)
}


// for-of loop in Object

const myObj = {
    name : "aniket",
    age : 23,
    work : "Kar lunga ek din"
}

// for (const [key, value] of myObj) { // ############ Error : myObj is not iterable
//     console.log(key, value)
    
// }

// for (const key of myObj) { // ############ Error : myObj is not iterable
//     console.log(key)
    
// }