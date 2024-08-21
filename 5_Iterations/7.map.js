// map

const myNum = [1, 2, 3, 4, 5, 6, 7]

const addedNum = myNum.map((num)=>{
    return num + 10
})
// console.log(addedNum)

// chaining

const chainingNum = myNum
                    .map((num)=> num * 10) // 1st Order   Index 0 : 1 * 10  = 10
                    .map((num)=> num + 1)  // 2nd Order   Index 0 : 10 + 1  = 11
                    .filter((num)=> num >= 23) // 3rd Order  Index 0  11 >= 23 = false

console.log(chainingNum)