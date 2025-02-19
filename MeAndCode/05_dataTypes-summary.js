// 🔹 JavaScript: Dynamically Typed or Statically Typed?
// JavaScript is a **dynamically typed language**, meaning variable types are determined at runtime 
// and can change as the program executes.


// -----------------------------------------------------
// 🔥 Difference Between Primitive and Non-Primitive Data Types
// -----------------------------------------------------

// Data types in JavaScript are categorized based on how they are stored and accessed in memory.

// 🟢 **Primitive Data Types** (Call by Value)
// - These are stored directly in memory and when assigned to a new variable, 
//   a copy of the value is passed (not the reference).
// - JavaScript has **7 primitive types**: 
//   1️⃣ String 
//   2️⃣ Number
//   3️⃣ Boolean
//   4️⃣ Null
//   5️⃣ Undefined
//   6️⃣ Symbol
//   7️⃣ BigInt

// Example of Symbol (Used for unique identifiers)
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); // ❌ false (Symbols are always unique)


// 🔴 **Non-Primitive (Reference) Data Types** (Call by Reference)
// - These are stored in memory with a reference, meaning they are **not copied** when assigned to another variable.
// - JavaScript has **4 main non-primitive types**:
//   1️⃣ Arrays
//   2️⃣ Objects
//   3️⃣ Functions
//   4️⃣ Maps and Sets

// Example of an Array (Non-primitive)
const heros = ["Shaktiman", "Captain", "Shivaji"]; 

// Example of an Object (Non-primitive)
let myobj = {
    name: "Akhil",
    age: 22,
}

// Example of a Function (Non-primitive)
const myFunction = function (){
    console.log("Hello World");
}

// -----------------------------------------------------
// 🔹 Checking the Type of a Variable
// -----------------------------------------------------
console.log(typeof heros);      // ✅ "object" (Arrays are a special kind of object)
console.log(typeof myobj);      // ✅ "object"
console.log(typeof myFunction); // ✅ "function" (Functions are technically objects)
console.log(typeof id);         // ✅ "symbol"

// -----------------------------------------------------
// 🔥 Key Differences Between Primitive and Non-Primitive Data Types
// -----------------------------------------------------

/*
1️⃣ **Primitive types are immutable** (cannot be changed directly), while **non-primitive types are mutable**.
2️⃣ **Primitive types are stored directly in memory**, whereas **non-primitive types are stored as references**.
3️⃣ **Primitive values are copied when assigned**, whereas **non-primitive values are referenced** (i.e., changes affect the original).
*/

// Example of Call by Value (Primitive)
let x = 10;
let y = x; // Copy of value is assigned
y = 20;
console.log(x); // ✅ 10 (Original value remains unchanged)

// Example of Call by Reference (Non-Primitive)
let obj1 = { name: "Akhil" };
let obj2 = obj1; // Reference is assigned (not copy)
obj2.name = "Shetty";
console.log(obj1.name); // ✅ "Shetty" (Original object is affected)