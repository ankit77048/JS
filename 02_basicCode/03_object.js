const jsUser={
    name:"Ramesh",
    age:20,
    location:"simla",
    email:"ayyadav@gmail.com",
    lastLogin:["monday","sunday"]
}
console.log(jsUser)
console.log(jsUser.email)
console.log(jsUser["name"])
jsUser.email="ayyadav56@gmail.com"
console.log(jsUser)

// Object.freeze(jsUser)

jsUser.greet=function(){
    console.log(`hello my name is , ${this.name}`)
}
console.log(jsUser.greet())