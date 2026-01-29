// If else control flow satement

const isUserLoggedIn=true
const debitCard=true
if(isUserLoggedIn && debitCard){
    console.log("user is eliglible for shoping")
}
else{
    console.log("user is not eligible for shoping ")
}

// Switch case

const month=3
switch(month){
    case 1:{
        console.log("month is january")
        break
    }
    case 2:{
        console.log("month is feb")
        break
    }
    case 3:{
        console.log("month is march")
        break
    }
    case 4:{
        console.log("month is april")
        break
    }
    default:{
        console.log("this is another month")
        break
    }
}


// ternary operator

const a=40
a%2==0 ? console.log("even no") : console.log('odd no')