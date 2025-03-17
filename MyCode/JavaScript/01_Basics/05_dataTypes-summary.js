// JavaScript: Dynamically Typed or Statically Typed?
// JavaScript is a dynamically typed language, meaning variable types are determined at runtime 
// and can change as the program executes.

// -----------------------------------------------------
// Difference Between Primitive and Non-Primitive Data Types
// -----------------------------------------------------

// Data types in JavaScript are categorized based on how they are stored and accessed in memory.

// Primitive Data Types (Call by Value)
// - These are stored directly in memory and when assigned to a new variable, 
//   a copy of the value is passed (not the reference).
// - JavaScript has 7 primitive types: 
//   1. String 
//   2. Number
//   3. Boolean
//   4. Null
//   5. Undefined
//   6. Symbol
//   7. BigInt

// -----------------------------------------------------
// Example of All Primitive Data Types
// -----------------------------------------------------

// 1. String - Represents text enclosed in quotes
let firstName = "Akhil";
console.log(typeof firstName); // "string"

// 2. Number - Represents both integers and floating-point numbers
let age = 22;
let price = 99.99;
console.log(typeof age);  // "number"
console.log(typeof price);  // "number"

// 3. Boolean - Represents `true` or `false`
let isStudent = true;
console.log(typeof isStudent); // "boolean"

// 4. Null - Represents an intentional empty value
let emptyValue = null;
console.log(typeof emptyValue); // "object" (This is a known JavaScript bug)

// 5. Undefined - A variable that has been declared but not assigned a value
let notAssigned;
console.log(typeof notAssigned); // "undefined"

// 6. Symbol - Represents unique values (Used for object properties)
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false (Symbols are always unique)
console.log(typeof id); // "symbol"

// 7. BigInt - Used for very large integers
const bigNumber = 12345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// -----------------------------------------------------
// Non-Primitive (Reference) Data Types (Call by Reference)
// - These are stored in memory with a reference, meaning they are not copied when assigned to another variable.
// - JavaScript has 4 main non-primitive types:
//   1. Arrays
//   2. Objects
//   3. Functions
//   4. Maps and Sets

// -----------------------------------------------------
// Example of All Non-Primitive Data Types
// -----------------------------------------------------

// 1. Arrays - Collection of values
const fruits = ["Apple", "Banana", "Cherry"];
console.log(typeof fruits); // "object"

// 2. Objects - Key-value pairs
let person = {
    name: "Akhil",
    age: 22,
    city: "Mangalore"
};
console.log(typeof person); // "object"

// 3. Functions - Used to perform operations
const greet = function () {
    console.log("Hello, World!");
};
console.log(typeof greet); // "function"

// 4. Maps - Collection of key-value pairs where keys can be any type
const userMap = new Map();
userMap.set("name", "Akhil");
userMap.set("age", 22);
console.log(userMap);
console.log(typeof userMap); // "object"

// 5. Sets - Collection of unique values
const uniqueNumbers = new Set([1, 2, 3, 4, 1, 2]);
console.log(uniqueNumbers); // {1, 2, 3, 4}
console.log(typeof uniqueNumbers); // "object"

// -----------------------------------------------------
// Key Differences Between Primitive and Non-Primitive Data Types
// -----------------------------------------------------

/*
1. Primitive types are immutable (cannot be changed directly), while non-primitive types are mutable.
2. Primitive types are stored directly in memory, whereas non-primitive types are stored as references.
3. Primitive values are copied when assigned, whereas non-primitive values are referenced (i.e., changes affect the original).
*/

// Example of Call by Value (Primitive)
let x = 10;
let y = x; // Copy of value is assigned
y = 20;
console.log(x); // 10 (Original value remains unchanged)

// Example of Call by Reference (Non-Primitive)
let obj1 = { name: "Akhil" };
let obj2 = obj1; // Reference is assigned (not copy)
obj2.name = "Shetty";
console.log(obj)