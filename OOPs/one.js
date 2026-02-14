function user(username , loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
}
const userone=new user("alex",12,true);
const usertwo=new user("ram" ,11,false);
console.log(userone)
console.log(usertwo)