// **********************************
// FOR...IN LOOP EXAMPLES
// **********************************

// Example 1: Iterating over an Object
const myObject = {
    js: "JavaScript",
    py: "Python",
    java: "Java",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

console.log("Iterating over an object:");
for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}
console.log("\n");

// Example 2: Iterating over an Array (for...in gives index keys)
const programming = ["js", "rb", "py", "java", "cpp"];

console.log("Iterating over an array:");
for (const index in programming) {
    console.log(programming[index]); // Access values using index
}
console.log("\n");

// **********************************
// INCORRECT USAGE OF for...in WITH MAP
// **********************************

const map = new Map();
map.set("js", "JavaScript");
map.set("py", "Python");
map.set("java", "Java");
map.set("cpp", "C++");
map.set("rb", "Ruby"); 

console.log("Iterating over a Map (Incorrect approach):");
for (const key in map) { // This will NOT work
    console.log(`${key}`); // Nothing will be logged
}
console.log("\n");

// **********************************
// CORRECT WAY TO ITERATE OVER A MAP
// **********************************

console.log("Iterating over a Map using for...of:");
for (const [key, value] of map) { // Correct way to iterate over Map
    console.log(`${key} is the shortcut for ${value}`);
}