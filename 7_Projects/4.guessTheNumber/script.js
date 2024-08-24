// Random Number : Range : 1 - 100
let randomNumber = Math.floor(Math.random() * 100 + 1) // random() * max + min
// console.log(randomNumber)

// Global variable
const guessNumber = document.querySelector('#guessField')
const submit = document.querySelector('#submit')
const resultBody = document.querySelector('.resultParas')
const previousGuess = document.querySelector('.guesses')
const remainingGuess = document.querySelector('.lastResult')

// console.log(submit)

