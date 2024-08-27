function setUserName(username){ // this parameter is not here to take the argument?? why??  My Suggestion : I think ,It is implicit, i.e understand internally by js
    // complex db calls
    this.username = username
    console.log("setUserName Called")
    // return this.username // unable to return the value.
}

function getUserName(username, email, password){
    
    // this.username = username // let outsource username from setUserName
    // setUserName(username) // it got called but the function destroyed its context after execution hence, we dont get any access to the this.username in that function.


    // .call =>  hold reference of the function
    // this argument => giving / passing ,his .this to the called function. to use instead of its own .this cause it will get deleted eventually.
    setUserName.call(this, username) // it will call the function and get and save the context of the called function to use the this.username from the setUserName function.
    this.email = email
    this.password = password
    console.log("getUserName Called")
}

const userData = new getUserName("aniket","aniket@gmail.com",123) // without new, Error :undefined

console.log(userData)

// # REMEMBER:
// 1. just by calling the function  inside another function, it doesn,t means it will also give you its context.
// 2. when the function executed ,it will be removed with its execution context(variables,objects,etc)

//3. .call is used to hold the reference of the function.  
