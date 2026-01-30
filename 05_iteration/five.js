// print value of using for each
const coading=["js", "python" , "java" , "c++"]
coading.forEach(function(val){
    console.log(val)
})

coading.forEach((items)=> {
    console.log(items)
})

coading.forEach((items,index, arr)=> {
    console.log(items , index , arr)
})

const myCoading=[
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"javascript",
        languageFileName:"js"
    }
]

myCoading.forEach((items)=> {
    console.log(items.languageFileName)
})