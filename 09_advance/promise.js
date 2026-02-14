const promiseOne=new Promise(function(resolve,reject){
    // do a asyn task
    // Db call , cryptography, network
    setTimeout(function(){
     console.log('asyn task is completed')
     resolve();
    },1000);
})

// then method is used to consume the promise and directly related to resolve that we have written inside the function.
promiseOne.then(function(){
    console.log("promise consume")
})
 
// we can do the promise like we  write above or we can write this way 

new Promise(function(resolve,reject){
    setTimeout(function(){
      console.log("async task 2")
      resolve()
    },1000)
}).then(function(){
    console.log('aync task 2 is completed')
})
 
// we can write promise 3 

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:'chai',email:'chai@example.com'})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

// here we can write promise 4

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
        resolve({username:'alex',password:'123'})
        }
        else{
            reject('something went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
console.log(user)
return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("finally the promise is either resolve or rejected")
})

// here we write promise five

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:'javascript', password:'123'})
        }
        else{
            reject("js went wrong")
        }
    },1000)
})

// async function getAllPara() {
//  try {
//      const response= await fetch('https://api.github.com/users/hiteshchoudhary')
//      const data=await response.json() // we can cahnge the string into object by using json api always return dta in string data type
//      console.log(data)
//  } catch (error) {
//      console.log("something went wrong in this code",error)
//  }
// }
// getAllPara()

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})