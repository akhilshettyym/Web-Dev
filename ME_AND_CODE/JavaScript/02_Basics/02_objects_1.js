// ✅ Singleton Object
// Creating objects using `Object.create()` (singleton pattern)
const singletonUser = Object.create({}); // Empty object

// -----------------------------------------------------
// 🔹 Object Literals
// -----------------------------------------------------

const mySym = Symbol("key1"); // Creating a unique symbol

const jsUser = {
    "full name": "Akhil Shetty M",
    name: 'Akhil',
    age: 22,
    location: "Mangalore",
    [mySym]: "myKey1", // Correct way to use symbols in an object
    email: "akhilshetty2003@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
};

// ✅ Accessing object properties
console.log(jsUser.email);  // ✅ Dot notation
console.log(jsUser["email"]);  // ✅ Bracket notation
console.log(jsUser["full name"]);  // ✅ Required for properties with spaces
console.log(jsUser[mySym]);  // ✅ Accessing symbol property
console.log(typeof jsUser["mySym"]); // ❌ Undefined (Symbol is not treated as a normal key)


// -----------------------------------------------------
// 🔹 Modifying & Freezing Objects
// -----------------------------------------------------

jsUser.email = "21f04.akhil@sjec.ac.in";  // ✅ Modifying object property

// ❌ Freezing the object to prevent changes
// Object.freeze(jsUser);

jsUser.email = "akhilshetty2003@gmail.com";  // ❌ Won't change if frozen
console.log(jsUser);


// -----------------------------------------------------
// 🔹 Adding Methods to Objects
// -----------------------------------------------------

jsUser.greeting = function() {
    console.log("Hello, I am Akhil Shetty");
};
console.log(jsUser.greeting);  // ✅ Function reference (not execution)

// ✅ Calling the function
jsUser.greeting();  // ✅ Output: "Hello, I am Akhil Shetty"


// 🔥 Using `this` keyword inside an object
jsUser.greeting2 = function() {
    console.log(`Hello, I am ${this.name}`);
};
console.log(jsUser.greeting2);  // ✅ Function reference

// ✅ Calling the function
jsUser.greeting2();  // ✅ Output: "Hello, I am Akhil"
