/*
Prefer not to use var : Issue in block scope and functional scope

 let for variable   // same as var but tackle the scope issue;
 const for constant

*/

let accountState

const accountId = "aniket";
// const accountId = aniket; * error: aniket is not defined *
let accountEmail = "aniket.g.varma@slrtec.in";
var accountPassword = "1234";
accountCity = "Jaipur";  // not preferable to use.

// accountId = 2   // * TypeError: Assignment to constant variable. *

// accountEmail = "hello@gmail.com" // * sucessfull *

// console.log(accountEmail)   // ; semi-colon is not necessary.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])