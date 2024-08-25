// Promises
// Definition : any asynchronous task given to promise will added to queue, but will not execute immediately.
/* asynchronous task = 
       1. access file from system
       2. network data access
       3. cryptography
       4. access microphone or camera in mobile devices

*/
// Solution to deal with async problem.
// 1. Asyn Await
// 2. promise() // modern programming approach

/*
  A Promise is in one of these states:
   1. pending: initial state, neither fulfilled nor rejected.
   2. fulfilled: meaning that the operation was completed successfully.
   3. rejected: meaning that the operation failed.
*/

// Understanding the promise by ,consuming the promise , is a bad appraoch in learning
// fetch("www.google.com").then().catch().finally()

// Understanding the promise by ,creating the promise , is a good appraoch in learning

// ######## PROMISE #########
/*
  A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions: one called if the audio file is successfully created, and the other called if an error occurs.
*/

// PROMISE IS AN OBJECT.

// Today's  Promise
// const promiseOne = new Promise() // This format in promise is introduced in ES6 version.

// History of Promise
/*
  1. People use Asyn Await 
  2. Promise introduce
  3. Developer trying to use promise using Q and BlueBird
  4. BlueBird which is promise library provide with today fetch() feature during than time using core JS .
  5. BlueBird got appreciated and Integrated
*/
 // Promise => Create + Consume

// Promise Creation
const promiseOne = new Promise(function(resolve,reject){
    // do async task like DBcalls, network call, cryptography
    setTimeout(()=>{  // This Execute 1st
        console.log("Async Task Completed")
        resolve() // to connect with .then
    },1000)
})

//Promise Consumption
// value return from setTimeout through promise
promiseOne.then(()=>{ // This Execute 2nd
    console.log("Promise Consumed")
})


// concise way to write a promise

new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async Task 2 Completed')
        resolve()
    },1000)
}).then(()=>{
    console.log("Task 2 Promise Consumed")
})


// passing object through resolve()
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 3")
        resolve({name: "aniket",age: 19})
    },1000)
})

promiseThree.then((resolveObject)=>{
    console.log(resolveObject)
})

// chaining in promise
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let error = false
    if (!error){
        console.log("Async Task 4 completed")
        resolve({name:"jay",age:20})
    } else{
        reject("Error: Something went wrong")
    }
},1000)
})
// the way to present the chaining.
promiseFour
.then((resolveObject)=>{
    const myObject = resolveObject
    return myObject

})
.then((myObjectFromThen)=>{
   const username = myObjectFromThen.name
   console.log(username)
})
.catch((errorFromReject)=>{
    console.log(errorFromReject)
})
.finally(()=>{
    console.log('either task is resolve() or reject() or both')
})

// ## IMPORTANT
// Promise consuming using async/await function.
const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = true
        if (!error){
            resolve({
                username: "mohit",
                age: 34
            })
            console.log("Async Task 5 Completed");
        }else {
            reject("Error : 404")
        }
    },1000)
})

// Using Async/Await for Consuming Promise Five
const consumePromiseFive = async()=>{
    try {     // .then of promise
        const promiseOutput = await promiseFive
        console.log(promiseOutput)
    // console.log(resolveObject)
        
    } catch (rejectError) {    // .catch of promise
        console.log(rejectError)
    }
}

consumePromiseFive() // to execute async function.


// Real life problem  

// Using async await
const getAllUsers = async()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
         const data = await response.json()  // without await, Output : Promise { <pending> }
         console.log(data)
    } catch (error) {
        console.log('E: ',error)
    }

}

getAllUsers()


// using .then .catch
// fetch is a promise type object
// fetch working is quite unique.
fetch("https://api.github.com/users/vaan-github")
.then((fetchResponse)=>{
    console.log('Fetch Completed')
    return fetchResponse.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    // console.log(error)
    console.log("E: ",error)
})

