const form=document.querySelector('form')
form.addEventListener('submit' , function (e){
e.preventDefault()
const height = parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value);
const result=document.querySelector('#result')
if(height=='' || height<0 || isNaN(height)){
    result.innerHTML="please enter the valid height"
    return;
}
if(weight=='' || weight<0 || isNaN(weight)){
    result.innerHTML="please enter the valid weigth"
    return;
}
const bmi=(weight/((height*height)/10000)).toFixed(2)
let message=""
if(bmi<=18.6) {
    message="the person is underweight."
}
else if(bmi>18.6 && bmi<=24.9) 
    {
        message="person is in normal range."
    }
else {
    message="person is overweight."
    }
    result.innerHTML = ` The result is based on person weight and height:  <br> BMI:- ${bmi}<br> ${message}`;
});

