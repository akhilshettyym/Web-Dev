// *************************************************
// Basic for loop
// *************************************************
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("5 is the best!");
    }
    console.log(i); // Prints numbers from 0 to 10
}

// *************************************************
// Nested for loop (Multiplication Table Example)
// *************************************************
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication Table for ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("-------------------");
}

// *************************************************
// Looping through an Array
// *************************************************
let myArray = ["Flash", "Batman", "Superman"];

console.log("Printing array elements:");
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]); // Prints each element of the array
}

// *************************************************
// Break and Continue Example
// *************************************************
console.log("Break and Continue Example:");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Skipping 5 using continue...");
        continue; // Skips 5 and moves to the next iteration
    }
    if (i === 8) {
        console.log("Stopping loop at 8 using break...");
        break; // Stops the loop when i reaches 8
    }
    console.log(i);
}

/*
Explanation:
- `continue` skips the current iteration and moves to the next one.
- `break` stops the loop entirely.
*/

console.log("Example using break and continue:");

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {

    // Skip the number 5 using continue
    if (i === 5) {
        console.log("Skipping number 5...");
        continue; // Moves to the next iteration, skipping the rest of the loop for i = 5
    }

    // Stop the loop when i reaches 8 using break
    if (i === 8) {
        console.log("Stopping the loop at 8...");
        break; // Exits the loop completely
    }

    console.log(`Number: ${i}`); // Prints numbers except for skipped (5) and stops at 8
}