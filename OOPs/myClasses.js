
class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptedPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new user("alex","abc@gmail.com","123")
console.log(chai.encryptedPassword())
console.log(chai)
console.log(chai.changeUsername())