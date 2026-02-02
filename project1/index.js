const button=document.querySelectorAll('.button')
const body=document.querySelector('body')
button.forEach(function (button){
    console.log(button);  // this is not rwuired i only print to see this in console
    button.addEventListener('click' , function(e){
        console.log(e)     // this is not rwuired i only print to see this in console
        console.log(e.target)    // this is not rwuired i only print to see this in console
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
         if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
         if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }

    })
});
