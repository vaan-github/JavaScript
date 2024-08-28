// getter setter
// method 2: object based syntax

// very weird way
// not used in production.
const User = {
    _name : "aniket",

    get name(){
        console.log("GET")
        return this._name
    },
    set name(name){
        console.log("SET");
        this._name = name
    }
}

// Accesing the object.

// new is the constructor fuction
// const data = new User() // TypeError: User is not a constructor

// Object.create() is the factory function

const data = Object.create(User) // default null hota hai
console.log(data.name);
