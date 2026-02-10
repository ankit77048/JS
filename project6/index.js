const changeColor=function(){
   const hex="0123456789ABCDEF"
   let color='#'
   for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]
   }
    document.body.style.backgroundColor = color
}

let setIntervalId=null
document.querySelector('#start').addEventListener('click',function(){
    if(setIntervalId===null){
        setIntervalId=setInterval(changeColor,1000)
    }
})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(setIntervalId)
    setIntervalId=null
})

