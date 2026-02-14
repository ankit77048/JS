class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`a new couses added by ${this.username}`);
    }
}
const chai=new teacher("alex","abc123@gmial.com","123")
chai.addCourse() 