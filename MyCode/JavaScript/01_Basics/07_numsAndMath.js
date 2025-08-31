// Number Data Type in JavaScript

// Declaring a Number
const score = 400;
console.log(score); // Output: 400

// Creating a Number Object
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Converting Number to String & Checking Length
console.log(balance.toString().length); // Output: 3 (since "100" has 3 characters)

// Formatting Decimal Places
console.log(balance.toFixed(2)); // Output: "100.00" (Rounds to 2 decimal places)


// Precision in Numbers

const otherNumber = 23.8974;
console.log(otherNumber.toPrecision(3)); // Output: "23.9" (Keeps 3 significant digits)
console.log(otherNumber.toPrecision(2)); // Output: "24" (Rounds to 2 significant digits)


// Formatting Large Numbers with `toLocaleString()`

const hund = 1000000;
console.log(hund.toLocaleString('en-IN')); // Output: "10,00,000" (Indian Number System)
console.log(hund.toLocaleString('en-US')); // Output: "1,000,000" (International Format)


// JavaScript Math Object

console.log(Math); // Output: Math object with various functions

// Absolute Value
console.log(Math.abs(-4)); // Output: 4 (Removes negative sign)

// Rounding Values
console.log(Math.round(4.6)); // Output: 5 (Rounds to nearest integer)
console.log(Math.ceil(4.3)); // Output: 5 (Always rounds up)
console.log(Math.floor(4.9)); // Output: 4 (Always rounds down)

// Square Root
console.log(Math.sqrt(25)); // Output: 5 (Square root of 25)

// Minimum & Maximum
console.log(Math.min(25, 30, 29)); // Output: 25 (Finds smallest value)
console.log(Math.max(25, 1, 567, 89329)); // Output: 89329 (Finds largest value)


// Generating Random Numbers

console.log(Math.random()); // Output: Random number between 0 and 1
console.log((Math.random() * 10) + 1); // Output: Random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Random integer from 1 to 10


// Generating a Random Number in a Given Range
const min = 10;
const max = 100;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Output: Random integer betwe