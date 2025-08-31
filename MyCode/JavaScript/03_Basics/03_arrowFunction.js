// In arrow functions, there is no "this" binding.
// "this" refers to the current execution context.

const user = {
    username: "Akhil",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to the website`);
        console.log(this); // Refers to the current object
    }
}

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// "this" in global scope (in a browser it refers to the window object, in Node.js it refers to an empty object `{}`)
console.log(this);

// Regular function example:
function chai() {
    let username = "Akhil";
    console.log(this); // In a function, "this" refers to the global object (window in browsers, undefined in strict mode)
    console.log(this.username); // Undefined, because "this" does not refer to the function's scope
}
// chai();

// Arrow function example:
const chaiArrow = () => {
    let username = "Akhil";
    console.log(this); // Arrow functions do not have their own "this", it inherits from the surrounding lexical scope
    console.log(this.username); // Undefined, because "this" does not refer to the function's scope
}

// Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;  // Requires "return" because of curly braces
}
console.log(addTwo(2, 4));

// Implicit return
const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(2, 4, 6));

const addArrow = (num1, num2) => (num1 + num2);
console.log(addArrow(5, 10));

// If curly braces are used, "return" is required
// If parentheses are used, "return" is implicit

// Returning an object using arrow function
const addObject = (num1, num2) => ({ username: "Akhil" });
console.log(addObject(2, 4));