// Example of Truthy & Falsy values

// Uncomment different values of `userEmail` to test
const userEmail = "akhil@google";  // Truthy
// const userEmail = "";           // Falsy (empty string)
// const userEmail = [];           // Truthy (empty array)

if (userEmail) {
    console.log("✅ Got the user email...");
} else {
    console.log("❌ User Email is not available...");
}

/*
🔹 Falsy Values in JavaScript:
- false
- 0, -0
- "" (empty string)
- null
- undefined
- NaN (Not-a-Number)

🔹 Truthy Values in JavaScript:
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
    console.log("❌ User array is empty...");
} else {
    console.log("✅ User array has values...");
}

// Checking if an object is empty
const emptyObj = {}; 
if (Object.keys(emptyObj).length === 0) {
    console.log("❌ Object is empty...");
} else {
    console.log("✅ Object has properties...");
}

// Example of truthy behavior with functions
function myFunction() {
    return "Hello!";
}

if (myFunction) {
    console.log("✅ Function is truthy...");
} else {
    console.log("❌ Function is falsy...");
}