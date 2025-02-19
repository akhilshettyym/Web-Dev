// 🔹 JavaScript Operations

// -----------------------------------------------------
// 🟢 Basic Arithmetic Operations
// -----------------------------------------------------

let value = 3;
let negValue = -value; // Negative value
console.log(negValue); // ✅ -3

// ✅ Arithmetic Operators
console.log(2 + 2); // ✅ Addition → 4
console.log(2 - 2); // ✅ Subtraction → 0
console.log(2 * 2); // ✅ Multiplication → 4
console.log(2 / 2); // ✅ Division → 1
console.log(2 % 2); // ✅ Modulus (Remainder) → 0
console.log(2 ** 3); // ✅ Exponentiation (Power) → 8 (2^3)

// -----------------------------------------------------
// 🟠 String Concatenation
// -----------------------------------------------------

let str1 = "hello";
let str2 = " akhil";

let str3 = str1 + str2; // ✅ Concatenation
console.log(str3); // ✅ "hello akhil"

// -----------------------------------------------------
// 🔴 Type Coercion (Automatic Type Conversion)
// -----------------------------------------------------

console.log("1" + 2); // ✅ "12" (String + Number → String)
console.log(1 + "2"); // ✅ "12" (Number + String → String)
console.log("1" + 2 + 2); // ✅ "122" (String + Number + Number → String)
console.log(1 + 2 + "2"); // ✅ "32" (Number + Number → Number, then String)

// 🔹 Why?
// JavaScript reads from **left to right**:
// - "1" + 2 → "12"
// - "12" + 2 → "122"
// - But 1 + 2 = 3 (number first), then "3" + "2" = "32"

// -----------------------------------------------------
// 🔵 Unary Operators
// -----------------------------------------------------

console.log(+true); // ✅ 1 (true is converted to number)
console.log(+false); // ✅ 0
console.log(+null); // ✅ 0
console.log(+undefined); // ❌ NaN (Not a Number)
console.log(+ ""); // ✅ 0 (empty string converted to number)

// ✅ Example
console.log(true + true); // ✅ 2 (true = 1, so 1 + 1 = 2)

// -----------------------------------------------------
// 🟣 Assignment Operators
// -----------------------------------------------------

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // ✅ All three variables get assigned 4
console.log(num1, num2, num3); // ✅ 4 4 4

// -----------------------------------------------------
// 🔥 Increment and Decrement Operators
// -----------------------------------------------------

let gameCounter = 100;
gameCounter++; // ✅ Increments by 1
console.log(gameCounter); // ✅ 101

gameCounter--; // ✅ Decrements by 1
console.log(gameCounter); // ✅ 100

// ✅ Post-increment (Uses the value first, then increments)
let x = 5;
console.log(x++); // ✅ Prints 5, then x becomes 6
console.log(x); // ✅ Now x is 6

// ✅ Pre-increment (Increments first, then uses the value)
let y = 5;
console.log(++y); // ✅ Increments to 6, then prints 6