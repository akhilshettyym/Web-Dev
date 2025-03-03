// ****************************
// WHILE LOOP EXAMPLES
// ****************************

// Example 1: While loop (Counting Numbers)
let count = 1; // Initialize a counter

while (count <= 5) { // Loop runs while count is less than or equal to 5
    console.log(`Count: ${count}`);
    count++; // Increment counter
}
console.log("While loop finished.\n");

// Example 2: While loop (Looping Through an Array)
let myArray = ["Flash", "Batman", "Superman"];
let arr = 0; // Index to track elements

while (arr < myArray.length) { // Runs while arr is within array bounds
    console.log(myArray[arr]); // Prints the current element
    arr++; // Moves to the next element
}
console.log("While loop finished.\n");

// ****************************
// DO-WHILE LOOP EXAMPLE
// ****************************

// Example 3: Do-while loop (Runs at Least Once)
let num = 10; // Initialize variable

do {
    console.log(`Number: ${num}`);
    num++; // Increment the number
} while (num <= 5); // Condition is false, but the loop still runs once

console.log("Do-while loop finished.");