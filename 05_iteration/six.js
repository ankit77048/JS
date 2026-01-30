const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNum.filter((num)=> num>5)
// console.log(newNum)
 
 //or


const newNum=myNum.filter((num)=> {
    return num>5 
})
console.log(newNum)
