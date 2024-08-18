// Stack(Primitive), Heap(Non-Primitive)
/*
   Stack : we get a copy of the orginal value.
   Heap : we get a reference of the original value.

*/

// Stack Example

let name1 = "aniket" 
let name2 = name1 // copied the same data 
name2 = "amit" 
// console.table([name1,name2])

// Heap Example

let user1 = {
    name: "aniket",
    age:23
}
let user2 = user1 // reference address of the data were shared.

user2.age= 20
console.log(user1)
