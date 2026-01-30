let myNum=[1,2,3,4,5,6,7,8,9,10]
// use of map
const anotherNewNum=myNum.map((numb)=>numb=numb+11)
console.log(anotherNewNum)

// chaining of method
const newNum=myNum.map((num)=> num*10).map((num)=>num+1).filter((num)=>num>=30)
console.log(newNum)