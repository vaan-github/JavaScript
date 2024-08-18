const marvelHeroes = ["ironman", "hulk", "thor", "black-widow"]
const dcHeroes = ["superman", "batman", "flash", "wonder-woman"]


// marvelHeroes.push(dcHeroes) // whole array will be inserted at the end as one entity.

// const heroes1 = marvelHeroes.push(dcHeroes) // this is not working, unable to assign array to the const, because it return only the new length of the array, not the actual array.

// console.log(marvelHeroes) 
// console.log(marvelHeroes[4][1]) //multi dimensional array 

const heroes = marvelHeroes.concat(dcHeroes) // it return the new array which should be save in new const, both array joined and save in the heroes.
// console.log(heroes)


// SPREAD OPERATOR  (EASY)

const spreadHeroes = [...dcHeroes, ...marvelHeroes]
// console.log(spreadHeroes)

// FLAT FUNCTION

const myAr = [1, 2, [3, 4, [5, 6, [7, 8]]]]

const flatArray = myAr.flat(3) // can use ***Infinity*** if you dont know how many dimension it has.
// console.log(flatArray)

// Interesting Functions of Array

// console.log(Array.isArray('aniket'))
// console.log(Array.from('aniket'))
// console.log(Array.from({name: 'aniket'})) // Interesting Interview Question.


const score1 = 100
const score2 = 200
const score3 = 300

const scoreArray = Array.of(score1, score2, score3)
console.log(scoreArray)