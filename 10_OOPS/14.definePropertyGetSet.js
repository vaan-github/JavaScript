// Behind the scene of the getter and setter 

// method 1 : function based syntax
function User(username){
    this._username = username

    // function is function and Object (duality), just like light

    // Getter and Setter
    // no need to write _email, it will analyze it by default.
    Object.defineProperty(this, 'username',{
        get: function(){
            return this._username.toUpperCase()
        },
        set: function(value){
            this._username = value
        }
    }) // setProperty's "this" is referencing to the global variable.

}

const data = new User("aniket")
console.log(data.username)



