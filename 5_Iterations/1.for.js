// for 

/**
       for (initialization; condition ; operation ){
        // block of code loop till the condition is true
       } 

       flow of loop:
       1. initialization (one time process )
       2. condition if true 
       3. execution of block of code {}
       4. operation
       5. check condition : false
       6. loop break 
       7. exit




 */

// Loop with control flow

for (let i = 1; i <= 10; i++) {  // 

    if ( i == 5){
        // console.log("We reached the Mid")
    }
    // console.log(i)
    
}

// Nested Loop

for (let i = 1; i <= 3; i++) {
    //  console.log(`OUTER LOOP : ${i}`)

     for (let j = 1; j <= 3; j++) {
        // console.log(`Inner Loop : ${j} Outer Loop : ${i}`)
     }
    
}

// Printing Table 1 - 10

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of : ${i}`)

    for (let j = 1; j <= 10; j++) {
    //    console.log(`Inner Loop : ${j} Outer Loop : ${i}`)
        //   console.log(`${i} * ${j} = ${i * j}`)
    }
    // console.log("")
   
}

// Array with for loop
 const myHeroes = ["Batman", "Superman", "DeadPool", "Wolverine"]
// console.log("Length of Array : ",myHeroes.length)
 for (let index = 0; index < myHeroes.length; index++) {
    const element = myHeroes[index];
    // console.log(element)
    
 }


// Break and Continue 

for (let index = 1; index <= 10; index++) {
       if (index == 5) {
        //    console.log("5 Detected")
           break
        
       }
    //    console.log(index)
    
}

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log("5 Detected")
        continue
     
    }
    console.log(index)
 
}


