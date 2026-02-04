let RandomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#submit');
const userInput=document.querySelector('#id1');
const guessSlot=document.querySelector('.guesses');
const remainning=document.querySelector('.lastresult');
const LowOrHI=document.querySelector('.LowOrHi');
const startOver=document.querySelector('.resultParas');
const p=document.createElement('p')

let prevGuess=[]
let numGuess=1
let playGame=true
 if(playGame){
    submit.addEventListener('click' , function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    validateGuess(guess);
    });
 }
function validateGuess(guess){
if(isNaN(guess)){
    alert("please enter a valid number")
}
else if(guess<1){
    alert("please enter the number greater than 1")
}
else if(guess>100){
    alert("please enter the number less than 1")
}
else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess);
        displayMessage(`Game over . and rnadom number was ${RandomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
if(guess===RandomNumber){
    displayMessage(`guess is correct`)
    endGame()
}
else if(guess<RandomNumber){
    displayMessage(`guess is too low`)
}
else if(guess>RandomNumber){
    displayMessage(`guess is too high`)
}
}
function displayGuess(guess){
userInput.value='';
guessSlot.innerHTML+=`${guess}   `
numGuess++
remainning.innerHTML=`${11-numGuess}`
}
function displayMessage(message){
LowOrHI.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
userInput.value=' '
userInput.setAttribute('disabled' , '')
p.classList.add('button')
p.innerHTML=`<h2 id="newGame">Start new game</h2>`
startOver.appendChild(p)
playGame=false
newGame()
}
function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click' , function(e){
RandomNumber=parseInt(Math.random()*100+1);
prevGuess=[];
numGuess=1;
guessSlot.innerHTML=''
remainning.innerHTML=`${11-numGuess}`
userInput.removeAttribute('disabled')
startOver.removeChild(p)
playGame=true
});
}


