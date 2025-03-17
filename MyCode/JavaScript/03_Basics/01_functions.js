// 1 Function Declaration & Execution
function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}
sayMyName();  // Function Execution

// 2 Function with Parameters & Return Value
function addTwoNumbers(num1, num2) {    
    let result = num1 + num2;
    return result;
}
const result = addTwoNumbers(3, 4);  // 3 and 4 are arguments
console.log("Results:", result);      // Output: Results: 7

// 3 Default Parameters & Handling Undefined Input
function loginUserMessage(username = "Guest") {
    return `${username} just logged in`;
}
console.log(loginUserMessage("Akhil"));  // Output: Akhil just logged in
console.log(loginUserMessage());         // Output: Guest just logged in

// 4 Rest Operator (...) - Handling Multiple Arguments
function calculateCartPrice(...num1) {    
    return num1;
}
console.log(calculateCartPrice(200, 400, 500));  // Output: [200, 400, 500]

// 5 Function with Objects
const user = {
    name: "Akhil",
    age: 25
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}
handleObject(user);    // Output: Username is Akhil and age is 25
handleObject({ name: "Khushi", age: 35 });  // Passing an inline object

// 6 Function with Arrays
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];  // Returns the second element of the array
}
console.log(returnSecondValue(myNewArray));  // Output: 400
console.log(returnSecondValue([100, 200, 300, 400]));  // Output: 200