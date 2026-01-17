// let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString('en-IN'))
// console.log(myDate.toLocaleString('en-IN'))
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(Date.now())

const now = new Date(); // Gets the current time in the user's local timezone

const options = {
    timeZone: 'Asia/Kolkata',
    // hour: 'numeric',
    // minute: 'numeric',
    // second: 'numeric',
    // hour12: false // se 24-hour format
    
};

const istTime = now.toLocaleString('en-IN', options);
console.log(istTime);


