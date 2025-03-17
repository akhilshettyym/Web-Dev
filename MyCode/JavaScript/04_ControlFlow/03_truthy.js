// Example of Truthy & Falsy values

const { log } = require("console");

// Uncomment different values of `userEmail` to test
const userEmail = "akhil@google";  // Truthy
// const userEmail = "";           // Falsy (empty string)
// const userEmail = [];           // Truthy (empty array)

if (userEmail) {
    // console.log(" Got the user email...");
} else {
    // console.log(" User Email is not available...");
}

/*
 Falsy Values in JavaScript:
- false
- 0, -0
- "" (empty string)
- null
- undefined
- NaN (Not-a-Number)

 Truthy Values in JavaScript:
- true
- 1, -1, 100, 3.14 (any non-zero number)
- "akhil" (any non-empty string)
- [] (empty array)
- {} (empty object)
- function() {} (any function)
*/

// Checking if an array is empty
const userArray = [];
if (userArray.length === 0) {
    // console.log(" User array is empty...");
} else {
    // console.log(" User array has values...");
}

// Checking if an object is empty
const emptyObj = {}; 
if (Object.keys(emptyObj).length === 0) {
    // console.log(" Object is empty...");
} else {
    // console.log(" Object has properties...");
}

// Example of truthy behavior with functions
function myFunction() {
    return "Hello!";
}

if (myFunction) {
    // console.log(" Function is truthy...");
} else {
    // console.log(" Function is falsy...");
}
 
// *************************************************
// Nullish Coalescing Operator (??) : Works with null & undefined
// *************************************************

let val1;

// Examples of Nullish Coalescing Operator (??)
val1 = 5 ?? 10;            // 5 (since 5 is NOT null/undefined)
console.log(val1);

val1 = null ?? 10;         // 10 (null is ignored, so 10 is taken)
console.log(val1);

val1 = undefined ?? 15;    // 15 (undefined is ignored, so 15 is taken)
console.log(val1);

val1 = null ?? 10 ?? 20;   // 10 (first non-null/undefined value is taken)
console.log(val1);

/*
Nullish Coalescing Operator (??) picks the first defined (non-null) value.
Useful when handling default values in cases of null or undefined.
*/

// *************************************************
// Ternary Operator (?:) - Shorter way to write if-else
// *************************************************

// Syntax: condition ? (if true) : (if false)

const iceTeaPrice = 100;

// Using Ternary Operator for conditional check
const message = iceTeaPrice >= 80 ? "Less than 80" : "More than 80";
console.log(message);

// Another Example
const age = 20;
const access = age >= 18 ? "Access Granted" : "Access Denied";
console.log(access);

/*
Ternary Operator is a shorthand for if-else statements.
Useful for simple conditions to keep code clean.
*/