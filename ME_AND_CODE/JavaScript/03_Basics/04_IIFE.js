// Named IIFE (Immediately Invoked Function Expression)
(function chai() {
    console.log(`DB CONNECTED`);
})();  
// Explanation: 
// - The function is defined inside `()` and executed immediately using `();`
// - This prevents variables inside from polluting the global scope.


// Another Named IIFE
(function chai() {
    console.log(`DB CONNECTED TWO`);
})(); 


// Unnamed (or Arrow Function) IIFE
(() => {
    console.log(`DB CONNECTED THREE`);
})();  
// Explanation: 
// - Arrow function syntax is used for a cleaner approach.
// - Still wrapped inside `()` and immediately executed.


// IIFE with Parameters
((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})('Akhil'); 
// Explanation: 
// - The IIFE accepts an argument (`name`) and executes immediately.