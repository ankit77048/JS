const arr=new Array(1,2,3,4)
const myArr=[10,20,30,"shaktiman",true]
console.log(arr)
console.log(myArr)
console.log(arr[3])
myArr.push(40)    // add element from last position
console.log(myArr)
myArr.pop()    // remove element from last position
console.log(myArr)
myArr.unshift(80)   // add element in first index
console.log(myArr)
myArr.shift()
console.log(myArr)   // remove elemrnt from first index
console.log(myArr.includes(30))

console.log("A" , myArr)
const newArr=myArr.slice(1,3)
console.log("B" , myArr) 
console.log(newArr)
const newArr1=myArr.splice(1,3)
console.log("C" , myArr)
console.log(newArr1)