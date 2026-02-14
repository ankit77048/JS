function setUsername(username){
    this.username=username;
}
function createUser(username,email,password){
    setUsername.call(this , username)
    this.email=email
    this.password=password
}
const chai=new createUser("chai","abc@123gmail.com","123")
console.log(chai)