// **********************************
// FOR...OF LOOP EXAMPLES
// **********************************

// Example 1: Iterating over an Array
const arr = [1, 2, 3, 4, 5];

console.log("Iterating over an array:");
for (const num of arr) {
    console.log(num);
}
console.log("\n");

// Example 2: Iterating over a String
const greetings = "Hello World";

console.log("Iterating over a string:");
for (const char of greetings) {
    console.log(`Each character: ${char}`);
}
console.log("\n");

// **********************************
// MAP EXAMPLES (Works with for...of)
// **********************************

const countryMap = new Map();
countryMap.set("IN", "India");
countryMap.set("US", "United States");
countryMap.set("UK", "United Kingdom");
countryMap.set("CA", "Canada");
countryMap.set("AU", "Australia");
countryMap.set("DE", "Germany");

// Map stores only unique keys, so duplicate keys are not added.
console.log("Iterating over a Map:");
for (const [key, value] of countryMap) {
    console.log(`${key} : ${value}`);
}
console.log("\n");

// **********************************
// OBJECT ITERATION (for...in instead of for...of)
// **********************************

const games = { 
    'game1': 'NFS',
    'game2': 'GTA',
    'game3': 'FIFA',
    'game4': 'Mortal Kombat'
};

// for...of does NOT work directly on objects, so we use Object.entries() to convert it into an iterable format.
console.log("Iterating over an object:");
for (const [key, value] of Object.entries(games)) {
    console.log(`${key} : ${value}`);
}
console.log("\n");

// Alternative: Using for...in (specifically for objects)
console.log("Iterating over an object using for...in:");
for (const key in games) {
    console.log(`${key} : ${games[key]}`);
}