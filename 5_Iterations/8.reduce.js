
// reduce 

const num = [1, 2, 3, 4, 5, 6]
let i = 0
const sum = num.reduce((accumulator, currrentValue)=>{
    // console.log ("Loop Count : ",i++)
    // console.log(`accumulator : ${accumulator}   currentValue : ${currrentValue}`)
    // console.log("")
    return accumulator + currrentValue
}, 0)

// console.log("RETURN RESULT :",sum)

// online reduce code
const onelineSum = num.reduce((acc,curVal)=> acc + curVal,0)
// console.log(onelineSum)

// Shopping Cart Real World Example

const shoppingCart = [
    {
        courseName : "complete java ",
        price : 599
    },
    {
        courseName : "complete python ",
        price : 1599
    },
    {
        courseName : "complete data science ",
        price : 899
    },
    {
        courseName : "complete MERN ",
        price : 1599
    },
    {
        courseName : "complete javascript ",
        price : 699
    },
]

const sumPrice = shoppingCart.reduce((acc, eachItem)=> acc + eachItem.price,0)
console.log(sumPrice)