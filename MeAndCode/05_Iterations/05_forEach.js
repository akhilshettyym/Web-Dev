// **********************************
// forEach() with Arrays
// **********************************

// Basic forEach loop
const coding = ["js", "ruby", "java", "swift", "cpp", "Python"];

console.log("Using a normal function:");
coding.forEach(function (item) { 
    console.log(item);  // Logs each element in the array
});

console.log("\nUsing an arrow function:");
coding.forEach((val) => { 
    console.log(val);  // Arrow function alternative
});

console.log("\nUsing a separate function:");
function printMe(item) {
    console.log(item);
}
coding.forEach(printMe); // Passing function reference

// **********************************
// forEach() with additional parameters
// **********************************

console.log("\nforEach with item, index, and array:");
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);  // Logs item, its index, and the whole array
});

// **********************************
// forEach() with an array of objects
// **********************************

const myCoding = [
    { languageName: "javascript", languageFileName: "js" },
    { languageName: "ruby", languageFileName: "ruby" },
    { languageName: "java", languageFileName: "java" }
];

console.log("\nIterating over an array of objects:");
myCoding.forEach((item) => {
    console.log(item.languageName); // Accessing object properties inside forEach
});