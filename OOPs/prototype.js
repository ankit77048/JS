let myName="hitesh     "
String.prototype.truelength=function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`true length is:${this.trim().length}`)
}
myName.truelength();

// let myHeros=['thor',"spiderman"]

// let heroPower={
//     thor:"hammmer",
//     spiderman:"sling",
//     getSpidermanPower:function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// } 


// // here we give power to the object it is shown in every array string  etch because due to comman path
//  object.prototype.hitesh=function(){
//  console.log("hitesh is present is all object")
// }

// // heroPower.hitesh()
// // myHeros.hitesh()

// Array.prototype.hitesh=function(){
//     console.log("hitesh is present in all ")
// }
// myHeros.hitesh()
// heroPower.hitesh()

// // prototype inheritance

// const user={
//     name:"alex",
//     email:"abc@123.com"
// }
// const teacher={
//     makeVideo:true
// }
// const teachingSupport={
//     isAvailable:true
// }
// const TASupport={
//     makeAssignment:'js',
//     fullTime:true,
//     __proto__:teachingSupport  // prototype inheritance
// }

// teacher.__proto__=user  // protype Inheritance

// // modern syntax od prototype inhertance

// Object.setPrototypeOf(teachingSupport,teacher)