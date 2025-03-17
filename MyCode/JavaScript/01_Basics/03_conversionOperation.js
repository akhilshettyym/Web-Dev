//  Type Conversion in JavaScript
// Converting one data type into another (String → Number, Boolean → Number, etc.)

// -----------------------------------------------------
//  Example 1: String to Number Conversion
// -----------------------------------------------------
let score = "33"; // String
console.log(typeof score); //  "string"

let valueInNumber = Number(score); // Convert to Number
console.log(typeof valueInNumber); //  "number"
console.log(valueInNumber); //  33

// -----------------------------------------------------
//  Example 2: Invalid String to Number Conversion
// -----------------------------------------------------
let score2 = "33aba"; // Invalid number string
console.log(typeof score2); //  "string"
console.log(Number(score2)); //  NaN (Not a Number)

// -----------------------------------------------------
//  Example 3: Null to Number Conversion
// -----------------------------------------------------
let score3 = null;
console.log(typeof score3); //  "object" (JS Bug)
console.log(Number(score3)); //  0 (null is converted to 0)

// ----------------------------------------------------
//  Example 4: Undefined to Number Conversion
// -----------------------------------------------------
let score4 = undefined;
console.log(typeof score4); //  "undefined"
console.log(Number(score4)); //  NaN

// -----------------------------------------------------
//  Example 5: Boolean to Number Conversion
// -----------------------------------------------------
let score5 = true;
console.log(typeof score5); //  "boolean"
console.log(Number(score5)); //  1 (true converts to 1)

let score6 = false;
console.log(typeof score6); //  "boolean"
console.log(Number(score6)); //  0 (false converts to 0)

// -----------------------------------------------------
//  Boolean Conversion Example
// -----------------------------------------------------
let isLoggedIn = 1; // 1 represents "true"
let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert to Boolean
console.log(booleanIsLoggedIn); //  true

// -----------------------------------------------------
// Summary: Type Conversions in JavaScript
// -----------------------------------------------------
/*
 "33"       → Number("33")        →  33
 "33aba"    → Number("33aba")     →  NaN (Not a Number)
 null       → Number(null)        →  0
 undefined  → Number(undefined)   →  NaN
 true       → Number(true)        →  1
 false      → Number(false)       →  0

 1          → Boolean(1)          →  true
 0          → Boolean(0)          →  false
 ""         → Boolean("")         →  false
 "Akhil"    → Boolean("Akhil")    →  true
*/

let someNumber = 33;
console.log(someNumber);
console.log(typeof someNumber);
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);