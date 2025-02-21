// Global Scope
// Variables declared outside of any function or block are in the global scope.
let a = 300; // 'a' is globally scoped

if (true) {
    // Block Scope: Variables declared with let/const inside a block ({}) are only accessible within that block.
    let a = 10;    // This 'a' is a new variable that shadows the global 'a' inside this block.
    const b = 20;  // 'b' is block-scoped and only accessible inside this block.
    // var c = 30; // Using 'var' here would declare 'c' in function/global scope, not block-scoped.
    
    console.log("Inner:", a); // Outputs 10 (refers to the block-scoped 'a')
}

// Outside the block, the global variable 'a' is accessible.
console.log(a); // Outputs 300 (global 'a')

// console.log(b); // Error: b is not defined outside the block.
// If we had declared 'c' with var inside the block, it would be accessible here.
// console.log(c);
