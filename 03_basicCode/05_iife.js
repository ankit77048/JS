( function chai(){               // named IIFE
    console.log("be connected")
}
)();

( (name) =>{                     // unnamed IIFE
    console.log(`another name that is connected ${name}`)
}
)("Alex");