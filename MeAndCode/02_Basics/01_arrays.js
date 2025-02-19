// 🔹 JavaScript Arrays

// ✅ Creating Arrays
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]); // ✅ Output: 0 (First element)

// ✅ Array of Strings
const myHeros = ["Shivaji", "Bhagat", "Subhas"];
console.log(myHeros); // ✅ Output: ["Shivaji", "Bhagat", "Subhas"]

// ✅ Another way to create an Array (Using Constructor)
const myArr2 = new Array(1, 2, 3, 4, 5, 6);
console.log(myArr2); // ✅ Output: [1, 2, 3, 4, 5, 6]


// -----------------------------------------------------
// 🔹 Array Methods
// -----------------------------------------------------

const meList = [];
meList.push("Akhil");  // ✅ Adds "Akhil" to the end
meList.push("Bhagat");
meList.push("Subhas");
meList.push("Shivaji");
meList.push("Rahul");
console.log(meList); // ✅ Output: ["Akhil", "Bhagat", "Subhas", "Shivaji", "Rahul"]

meList.pop(); // ✅ Removes last element ("Rahul")
console.log(meList); // ✅ Output: ["Akhil", "Bhagat", "Subhas", "Shivaji"]

meList.unshift("Shetty"); // ✅ Adds "Shetty" to the beginning
console.log(meList); // ✅ Output: ["Shetty", "Akhil", "Bhagat", "Subhas", "Shivaji"]

meList.shift(); // ✅ Removes first element ("Shetty")
console.log(meList); // ✅ Output: ["Akhil", "Bhagat", "Subhas", "Shivaji"]

console.log(meList.includes("Akhil")); // ✅ true (Checks if "Akhil" exists)

// ✅ Convert Array to String
const newArr = meList.join(); // Converts array to comma-separated string

console.log(meList);  // ✅ ["Akhil", "Bhagat", "Subhas", "Shivaji"]
console.log(newArr);  // ✅ "Akhil,Bhagat,Subhas,Shivaji"
console.log(typeof newArr); // ✅ "string"


// -----------------------------------------------------
// 🔹 Slice vs Splice
// -----------------------------------------------------

console.log("A ", myArr); // ✅ A  [0, 1, 2, 3, 4, 5]

// ✅ Slice: Extracts part of an array (Does NOT modify original array)
const myn1 = myArr.slice(1, 3); // Extracts index 1 to 2 (not 3)
console.log(myn1); // ✅ Output: [1, 2]
console.log("B ", myArr); // ✅ Original array remains unchanged

// ✅ Splice: Removes & Returns part of an array (Modifies original array)
const myn2 = myArr.splice(1, 3); // Removes elements at index 1, 2, 3
console.log("C ", myArr); // ✅ Output: [0, 4, 5] (Original array modified)
console.log(myn2); // ✅ Output: [1, 2, 3] (Extracted elements)