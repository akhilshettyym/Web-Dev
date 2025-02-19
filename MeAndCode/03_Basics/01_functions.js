// Funtions

// console.log("A");
// console.log("K");
// console.log("H");
// console.log("I");
// console.log("L");

function sayMyName() {
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}
// sayMyName();       // sayMyName - reference and () - execution

// function addTwoNumbers(num1, num2){     //num1 and num2 are parameters
//     console.log(num1 + num2);
// }



function addTwoNumbers(num1, num2){     //num1 and num2 are parameters
    let result = num1 + num2;
    return result;
    console.log("Akhil");               // will never be printed.
}
const result = addTwoNumbers(3, 4);     // here 3 and 4 are arguements or values
// console.log("Results: ", result);

function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
        // console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Akhil"));


function calculateCartPrice(...num1){         // ... rest operator 
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));


const user = {
    name: "Akhil",
    age: 25,
    occupation: "Software Engineer"
}
const user2 = {
    name: "Shetty",
    age: 22,
    occupation: "Engineer"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

// handleObject(user);
handleObject({
    name: "Khushi",
    age: 35
})

const myNewArray = [200, 400, 100, 600];
function returnSecondVlaue(getArray){
    return getArray[1];
}
// console.log(returnSecondVlaue(myNewArray));
console.log(returnSecondVlaue([100, 200, 300, 400]));