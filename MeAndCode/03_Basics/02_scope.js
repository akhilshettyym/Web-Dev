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



// NESTED SCOPE (Lexical Scope)
// Functions can access variables declared in their parent functions due to lexical scope.

function one() {
    const username = "Akhil";  // Parent function variable

    function two() {  // Nested function
        const website = "YouTube";
        console.log(username + " is on " + website); 
        // Can access 'username' from parent scope
    }
    
    // console.log(website); // Error: 'website' is only accessible inside function two()

    two(); // Calling nested function
}

one(); // Outputs: "Akhil is on YouTube"

// NESTED IF CONDITIONS

if (true) {
    const userName = "Akhil";

    if (userName === "Akhil") {
        const website = "YouTube";
        console.log(userName + " is on " + website); // Works because 'userName' is accessible
    }

    // console.log(website); // Error: 'website' is only accessible inside inner if-block
}

// console.log(userName); // Error: 'userName' is block-scoped

// ----------------------------------------------

// FUNCTION HOISTING (Only for function declarations)

console.log(addOne(5)); // Works because function declarations are hoisted

function addOne(num) {  // Function declaration
    return num + 1;
}

console.log(addOne(10)); // Outputs: 11

// ----------------------------------------------

// FUNCTION EXPRESSION (Not Hoisted)

// console.log(addTwo(5)); // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {  // Function expression assigned to a variable
    return num + 2;
};

console.log(addTwo(5)); // Works after declaration (Outputs: 7)

// Key Takeaways:
// - Function Declarations are hoisted, meaning they can be called before their definition.
// - Function Expressions are not hoisted, so they must be declared before use.
// - Lexical Scope: Inner functions can access outer function variables, but not vice versa.