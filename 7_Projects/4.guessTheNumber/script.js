// Random Number : Range : 1 - 100
let randomNumber = Math.floor(Math.random() * 100 + 1) // random() * max + min
// console.log(randomNumber)

// Global variable
const guessNumber = document.querySelector('#guessField')
const submitButton = document.querySelector('#submit')
const resultBody = document.querySelector('.resultParas')
const previousGuess = document.querySelector('.guesses')
const remainingGuess = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')

const pTag = document.createElement('p')

let remainingGuessNumber = 10
let startGame = true
let previousGuessArray = []
// console.log(submit)

// Start a Game
if (startGame){
    console.log('New game created')
    submitButton.addEventListener('click',(e)=>{
        e.preventDefault();
        // console.log(guessNumber.value)
        
        const intConvertedGuess =  parseInt(guessNumber.value)
        // console.log(typeof intConvertedGuess);
        validateGuess(intConvertedGuess) // passes to validateGuess
        
    })


}

// Validating function
const validateGuess = (guess)=>{
      if(isNaN(guess)){
        alert("Is not a Number")
      }else if (guess < 1){
        alert("less than 1")
      }else if (guess > 100){
        alert("is greater than 100")
      }
      // Checking the remaining Guess
      else { 
        previousGuessArray.push(guess) // push the validated number to array
        if (remainingGuessNumber <= 0){
            updateDisplayGuess(guess)
            displayMessage(`Game Over .Number is ${randomNumber}`)
            endGame()
        }else{
            console.log("Number is Validated")
            updateDisplayGuess(guess)
            checkGuess(guess) // passes to checkGuess
        }

      }
}

// Checking function
const checkGuess = (guess) =>{
    if (guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage('Number is low')
    }else if (guess > randomNumber){
        displayMessage('Number is high')
    }
}

// Update Display
const updateDisplayGuess = (guess) =>{
    guessNumber.value = ''
    previousGuess.innerHTML += `${guess}, `
    remainingGuessNumber--
    remainingGuess.innerHTML = remainingGuessNumber
    console.log("guess updated to display")

  }

// display message 
const displayMessage = (message) =>{
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
    console.log("hint is displayed")

}

// endGame
const endGame = () =>{
    guessNumber.value = ''
    guessNumber.setAttribute('disabled','') // dont know much about this line.
    pTag.classList.add('button')  //dont know much about this line.
    pTag.innerHTML = `<h3 id='newGame'> Start New Game </h3>`
    resultBody.appendChild(pTag);
    startGame = false
    console.log('game ended , Number is ',randomNumber)
    newGame();
}

// start new Game
const newGame = () =>{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        startGame = true
        document.location.reload(true) // reload the window
    })


    // Alternative Code 
    // setting each value manually.
        
}





