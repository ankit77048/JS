// print value using for in loop

const myObject={
    js:"javascript",
    py:"python",
    rb:"ruby",
    cpp:"c++"
}

for(const key in myObject){
    console.log(`${key} is shortcut of ${myObject[key]}`)
}

const arr=["apple" , "mango" , "grapes" , "orange"]
for(const key in arr){
    // console.log(key)
    console.log(arr[key])
}