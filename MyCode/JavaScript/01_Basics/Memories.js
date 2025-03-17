//  Stack (Primitive) vs Heap (Non-Primitive) Memory Allocation

//  Stack Memory (Primitive Data Types)
// - When a primitive type is assigned to a new variable, a copy of the value is created.
// - Changes to the new variable do not affect the original variable.

let myInstaName = "akhilShettyM.com"; // Stored in Stack
let anotherName = myInstaName; // Copy of value is created

anotherName = "MeAndCode"; // Only 'anotherName' is changed, 'myInstaName' remains same

console.log(myInstaName);  //  Output: akhilShettyM.com
console.log(anotherName);  //  Output: MeAndCode


//  Heap Memory (Non-Primitive Data Types)
// - When an object is assigned to a new variable, the **reference** (not a copy) is passed.
// - Changes to one variable affect the original object.

let userOne = {
    email: "user@google.com",
    name: "Akhil Shetty",
    upi: "user#sbi"
}

let userTwo = userOne; // Reference to the same memory location is assigned

userTwo.email = "shetty@google.com"; // Modifies the original object

console.log(userOne.email); //  Output: shetty@google.com (Original object is modified)
console.log(userTwo.email); //  Output: shetty@google.com (Both point to the same reference)