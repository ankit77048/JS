const score=100
const balance=new Number(100000)
console.log(score)
console.log(balance)
console.log(score.toString()) // conver int string
const num=100
console.log(num.toFixed(2)) // print 2 digit after decimal
const newNum=134.858
console.log(newNum.toPrecision(4)) // give value to 4 digit with round of
console.log(newNum.toPrecision(3)) // give value with 3 digit with round of
const num2=1000000
console.log(num2.toLocaleString())
console.log(num2.toLocaleString('en-IN')) 
 
// here some math opration are:

const point=123.54
console.log(Math.ceil(point))
console.log(Math.floor(point))
console.log(Math.abs(-3))
console.log(Math.min(13,45,67,1,4))
console.log(Math.random()) // it can return random value in between 0 to 1
console.log(Math.floor(Math.random() * 10))
const min=1
const max=7
console.log(Math.floor(Math.random()*(max-min+1))+min)




