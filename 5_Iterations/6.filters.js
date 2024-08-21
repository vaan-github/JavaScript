// for-each short-comming

const myArray =["aniket", "jay", "sanjay", "kajal", "govind", "vidya"]

const myNames = myArray.forEach((names)=>{
    // console.log(names)
    return names 
})
// console.log(myNames) // Output : undefined // Hence we concluded that forEach do not return any type of data .

// Tackling the above problem.
// filter returns the array.

const myNum = [1, 2, 3, 4, 5, 6, 7]
const filterNum = myNum.filter((num)=>{
    // console.log(num) 
    return num > 3 // return value based on condition
    // it will also return an empty array.
})
// console.log(filterNum)


// Tackling the same problem using forEach.

const newNum = []

myNum.forEach((num)=>{
    if (num>3){
        newNum.push(num)
    }
})
// console.log(newNum)



// real world application of filter

const peopleInfo = [
    {
        name : "aniket",
        country : "india",
        age : 23
    },
    {
        name : "mohit",
        country : "london",
        age : 18
    },
    {
        name : "rohit",
        country : "london",
        age : 20
    },
    {
        name : "dinesh",
        country : "india",
        age : 21
    },
    {
        name : "manoj",
        country : "india",
        age : 22
    },
    {
        name : "aakash",
        country : "uae",
        age : 23
    },
    {
        name : "mayur",
        country : "uae",
        age : 22
    },
]

const indianPeople = peopleInfo.filter((obj)=>{
      return obj["country"] === "india"
})

const marriageAgeIndia = peopleInfo.filter((obj)=>{
    return obj.age >=21 && obj.country === "india"
})

// console.log(indianPeople)
console.log(marriageAgeIndia)