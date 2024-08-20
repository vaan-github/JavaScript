// if 
let condition = 3 !== "3" //  STRICT : true == 1 , false == 0   ;;;;  NOTE : THIS IS NOT ALLOWED 11,00 as true and false 
if (condition){
       console.log(`This block will only execute if the condition is TRUE`)
} else {
       console.log(`This block will only execute if the condition is FALSE`)
}

/**  
 * <= : 2 <= 2  , 2 is less than or equal to 2 , true
 * >= : 2 >= 2  , 2 is greater than or equal to 2 , true
 * <  : 3 < 2 , 3 is less than 2 , false
 * >  : 3 > 2 , 3 is greater than 2 , true
 * != : 3 != 3 , 3 is not equal to 3 , true
 * !== : 3 !== 3, 3 is strictly not equal to 3 , false
 * == : 3 == "3" , 3 is equal to "3" , true
 * === : 3 === "3" 3 is strictly equal to "3", false
*/

// Implict Scoping in if statement
// not readable please avoid this type of coding.

// if (true) console.log("true") // for single line 

if (false) console.log("first line true"), // for multiply line statement use ,
console.log("second line true"),
console.log("third line true")
// console.log("third line false")

// Nesting the if else

const userLoggedIn = true
const payment = false
const loginEmail = false
const loginPhoneNumber = true

if (userLoggedIn && payment){  // && => Short-Circuited AND Operator  , 1 * 0 = 0
    console.log("Welcome User to Our Paid Book Store")
    if (loginEmail || loginPhoneNumber){ // || => Short-Circuited OR Operator , 1 + 0 = 1
        console.log("Verified User ,Now able to publish book")
    }else{
        console.log("Paid User but Not Verified to publish")
    }
} else {
    console.log("Unable to login ")
}











