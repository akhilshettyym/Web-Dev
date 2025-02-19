// 🔹 String Basics

const name = "Akhil"; 
const repoCount = 50;

// ✅ String Concatenation using Template Literals (Recommended)
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`); // ✅ Output: Hello, my name is Akhil and my repo count is 50

// ✅ Checking Type of a String
console.log(typeof name); // ✅ Output: string


// 🔹 String as an Object (Using 'new String()')
const gameName = new String('Akhil'); // Creates a String Object instead of a primitive

console.log(gameName[0]); // ✅ Output: A (Accessing characters by index)
console.log(gameName.__proto__); // ✅ Shows prototype methods available for strings

console.log(gameName.length); // ✅ Output: 5 (Length of the string)
console.log(gameName.toUpperCase()); // ✅ Output: AKHIL (Converts to uppercase)
console.log(gameName.charAt(2)); // ✅ Output: h (Character at index 2)
console.log(gameName.indexOf('l')); // ✅ Output: 3 (Position of 'l')


// 🔹 Substring & Slice
const newString = gameName.substring(0, 4); // Extracts characters from index 0 to 3
console.log(newString); // ✅ Output: Akhi

const anotherString = gameName.slice(-8, 4); // Supports negative indices
console.log(anotherString); // ✅ Output: Akhi


// 🔹 Trim - Removing Extra Spaces
const newString_1 = "  Akhil  ";
console.log(newString_1); // ✅ Output: "  Akhil  " (With spaces)
console.log(newString_1.trim()); // ✅ Output: "Akhil" (Removes leading/trailing spaces)


// 🔹 Replacing Text in Strings
const url = "https://akhil.com/akhil%10shetty";
console.log(url.replace('%10', '-')); // ✅ Output: "https://akhil.com/akhil-shetty"


// 🔹 Checking Substrings
console.log(url.includes('akhil')); // ✅ Output: true (Checks if 'akhil' exists in the URL)


// 🔹 Splitting a String
const nameMe = new String('Akhil-Shetty-M');
console.log(nameMe.split('-')); // ✅ Output: [ 'Akhil', 'Shetty', 'M' ] (Splits string into an array)