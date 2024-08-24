// random guess : range(1-100)
const min = 1
const max = 100
random = Math.floor(Math.random() * (max - min + 1) + min)
console.log(random)

// Storing Previous Value
let myArray = []
// console.log(myArray)
// Remaining Guess
let remainingGuess = 10

// High/Low : Hinter
const highLow = document.querySelector('lowOrHi')

// submiting the Guess

addEventListener('submit',(e)=>{
    e.preventDefault()
   myGuess = parseInt(document.querySelector('#guessField').value)
//   console.log(typeof (document.querySelector('#guessField').value));
//   console.log(typeof (myGuess))
    
  // Checking Guess
  if (remainingGuess > 0){

       // Wrong Guess
       if (myGuess !== random){
            
            //Deducting Guess
            const lastResult = document.querySelector('lastResult')
            remainingGuess = remainingGuess - 1
            lastResult.innerContent = remainingGuess
            
            // Pushing my guess in array.
            const previousGuess = document.querySelector('guesses')
            myArray.push(myGuess) // actual push in array
            previousGuess.innerContent = myArray
          

            // Right Guess
         }else {
            //Result Revealed
            // Won
            console.log(random)
            highLow.innerContent = `${random}`
            
         }
         // Hint the User (High/Low)
         if(myGuess >= 50){
            // High
            highLow.innerContent = 'High'
         }else{
            // Low
            highLow.innerContent = 'Low'
         }
    }else {
        //Result Revealed
         // Loss
         highLow.innerContent = `You Loose : ${myGuess}`


    }

})