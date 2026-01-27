const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
// const obj3=(obj1 ,obj2 )
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)
const obj4={...obj1,...obj2}
console.log(obj4)
console.log(Object.keys(obj3))
console.log(Object.entries(obj3))

const course={
    coursename:"js",
    price:"1000",
    courseinstructor:"Alex",
}

// Destructure of object
const {courseinstructor : instructor}=course
console.log(instructor)