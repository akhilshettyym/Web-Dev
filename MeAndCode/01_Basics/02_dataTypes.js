"use strict"; // Ensures strict mode, preventing accidental errors

// 🚀 JavaScript is a dynamically typed language (no need to specify data types)

// ❌ This will not work in Node.js, only in a browser environment
// alert(3 + 3); 

console.log(3 + 3); // ✅ 6
console.log("Akhil"); // ✅ Prints "Akhil"

// 🔹 Declaring variables using let (Best Practice)
let name = "Akhil";   // String
let age = 22;         // Number
let isLoggedIn = false; // Boolean

// ------------------------------------------------------------------
// 🛠️ Primitive Data Types (7 Types)
// ------------------------------------------------------------------

// 1️⃣ **Number** → Represents integers and floating-point numbers
let userScore = 99.5; 
console.log(typeof userScore); // ✅ "number"

// 2️⃣ **BigInt** → Used for very large numbers beyond 2^53
let bigNumber = 123456789012345678901234567890n;
console.log(typeof bigNumber); // ✅ "bigint"

// 3️⃣ **String** → Represents text, enclosed in single or double quotes
let username = "Akhil Shetty";
console.log(typeof username); // ✅ "string"

// 4️⃣ **Boolean** → Represents true or false values
let isAdult = true;
console.log(typeof isAdult); // ✅ "boolean"

// 5️⃣ **Null** → Represents an intentional empty value
let emptyValue = null;
console.log(typeof emptyValue); // ❗"object" (Known JavaScript bug)

// 6️⃣ **Undefined** → Variable is declared but not assigned any value
let state;
console.log(typeof state); // ✅ "undefined"

// 7️⃣ **Symbol** → Used for unique values (mostly in advanced JS)
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // ✅ "symbol"

// ------------------------------------------------------------------
// 🛠️ Non-Primitive (Reference) Data Types
// ------------------------------------------------------------------

// **Objects** → A collection of key-value pairs
let user = {
    name: "Akhil",
    age: 22,
    isLoggedIn: true
};
console.log(typeof user); // ✅ "object"

// **Arrays** → Used to store multiple values
let colors = ["red", "blue", "green"];
console.log(typeof colors); // ✅ "object"

// **Functions** → A block of reusable code
function greet() {
    return "Hello, Akhil!";
}
console.log(typeof greet); // ✅ "function"

// **Date Object** → Used to handle dates and time
let currentDate = new Date();
console.log(typeof currentDate); // ✅ "object"

// ------------------------------------------------------------------
// 🔥 Special Case: typeof null
// ------------------------------------------------------------------
console.log(typeof undefined); // ✅ "undefined"
console.log(typeof null); // ❗ "object" (This is a well-known JavaScript bug)