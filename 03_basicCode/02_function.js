function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,400))

// Here we define how to use function with object
const course={
    name:"js",
    price:"5000"
}
function findObject(anyObject){
    return `The course name is ${anyObject.name} and price is ${anyObject.price}`
}
console.log(findObject(course))

// here i define how to use function with array

const myarr=[100,200,300,400]
function findArray(getArray){
    return `my array is ${getArray}`
}
console.log(findArray(myarr))

// return second value of array
function SecondValue(getArray){
    return `my second element of array is ${getArray[1]}`
}
console.log(findArray(myarr[1]))