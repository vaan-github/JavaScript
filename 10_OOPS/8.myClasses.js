// # ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// Classes are just a syntactical sugar
class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    uppercaseUsername(){
        return `${this.username.upperCase()}`
    }
}

const data = new User("aniket","aniket@gmail.com",123)

// console.log(data)
console.log(data.encryptPassword())

// // Behind the Scene 

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// Object.prototype.encryptPassword = function (){
//     return `${this.password}abc`
// }

// Object.prototype.uppercaseUsername = function (){
//     return `${this.username.upperCase()}`
// }

// const btsData = new User("jay","jay@gmail.com",321)

// console.log(btsData.encryptPassword())
