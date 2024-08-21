// Truthy and Falsy Value

/* ### Truthy Values :
        true, 1, "0", "false"," ", [], {}, function(){}

   ### Falsy Values :
        false, 0, -0, BigInt 0n, "", null, NaN, undefined,
       
*/
const username = " ";    // try this on also "", without space

if (username) {
    // console.log("true")
    
}else {
    // console.log("false")
}


// How to check an empty array

const emptyArray = [ , , ] // each comma represent each element

if (emptyArray.length == 0) {
    // console.log("empty array")
    
}else{
    // console.log(`Array has ${emptyArray.length} elements`)
}

// How to check an empty Object

const anyObject = {}

if (Object.keys(anyObject).length === 0){
    // console.log("Object is empty")
}else{
    console.log(`Object has ${Object.keys(anyObject).length} keys`)
}

// Interview Tricky
// console.table([false == 0, false == '', 0 == ''])


// Nullish Coalescing Operator (??) : null , undefined

// it is used to handle error in data delay.
let data 
// if the 10 is unable to procces then null will be store in data.
data = null ?? 10 // in place of 10 , in actual scenario there will be some function which may or may not return value , if function dont return value then null will be store in data variable.

// console.log(data)

// data = undefined ?? null
data = null ?? undefined
// console.log("result is ",data) 


// Ternary Operator

// conditon ? true : false

const iceTeaPrice = 9
iceTeaPrice > 8 ? console.log("Overrated") : console.log('Fair Price')



