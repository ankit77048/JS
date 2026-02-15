// console.log((Math.PI))

const descripter=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descripter)

const chai={
    name:"chai",
    price:"400",
    isAvailable:true
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:false  // if we enumerable is flase it cannot iterate
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key,entry] of Object.entries(chai) ) {
    console.log(`${key} : ${entry}`)
}