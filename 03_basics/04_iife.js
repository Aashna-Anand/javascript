// iife is used bcz kabhi kabhi global scope ke pollution se problem hoti hai kayi baar uss global scope ke pollution ko hatane ke liye we use iife

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // 2 iife ek saath likhne ke liye ; ka use karte hain

( () => {
    console.log(`DB CONNECTED ONE`);     // iife arrow function
}) ()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);  // iife with parameter
} )('hitesh')
