//###################### constructor => (singleton) Object  #########################

const mySingletonObj = new Object()  // singleton object
const myNonSingletonObj = {}  // non singleton object

// console.log(mySingletonObj)
// console.log(myNonSingletonObj)

// const tinderUser = new Object()
const tinderUser = {} // Initialise Object

// Inserting data in object 
tinderUser.id = "a1"
tinderUser.name = "aniket"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : 'aniket',
            middlename : "govind",
            lastname : "varma"

        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)


//  COMBINING OBJECTS

const obj1 ={
    1 : 'a' ,
    2 : 'b' ,
    3 : 'c' 
}

const obj2 ={
    4 : 'A' ,
    5 : 'B' ,
    6 : 'C' 
}

const obj3 = {obj1 , obj2}  // This is wrong combining.
// console.log(obj3);

// Object.assign(target, source1, source2, ....)  here target , source were the objects.
const combineObject = Object.assign({}, obj1, obj2)  // This is the real object Joining.
// console.log(combineObject)

// spread operator for joining the objects
const spreadObject = {...obj1, ...obj2} // easy
// console.log(spreadObject)
// console.log(combineObject === spreadObject)  // false ; not sure why


// How to handle value comes from database.
const database = [
    {
        name : 'aniket0',
        age : 20
    },
    {
        name : 'aniket1',
        age : 21
    },
    {
        name : 'aniket2',
        age : 22
    }
]

// console.log(database[0].name)

// console.log(tinderUser)

// IMPORTANT : THE DATATYPE IS CONVERTED TO ARRAY . 
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // convert key : value pair in array format.

// Search property
// console.log(tinderUser.hasOwnProperty('name')) // result is a boolean value




// ################ DESTRUCTURING IN JAVASCRIPT #######################

// Objects
const resume = {
    instructorName : "Mr. Wilson",
    institution : "Oxford University"
}

// console.log(resume.instructorName)

const {instructorName : Name} = resume  // destructuring objects in javascript
// console.log(Name)


// Array destructing  : rare case


// ################## API FORMAT ################

//  JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// popular api sites
// random userme api
// json formatter , use tree structure for better understanding

// FORMAT 1

// {
//     "name" : "aniket",
//     "age" : 18
// }

// FORMAT 2

[
    {},
    {},
    {}
]