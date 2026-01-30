const myNum=[1,2,3]
// const myTotal=myNum.reduce(function(acc,curr) {
//     console.log(`acc: ${acc} and curr ${curr}`)
//     return acc+curr
// },0 )
// console.log(myTotal)

// or we can use arrow function

const myTotal=myNum.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal)