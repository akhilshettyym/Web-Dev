console.log("Hello There");
console.log("Akhil Shetty M");
console.log("I love javascript");


// //Variables
// fullName = "Akhil Shetty M";
// console.log(fullName);
// age = 22
// console.log(age);

// price = 99.99
// console.log(price);

// X = null;           //Represents an intentional empty or unknown value
// Y = undefined;      //Represents a missing or uninitialized value
// console.log(X);  
// console.log(Y);


// //Boolean type
// isFollow = false;
// console.log(isFollow);
// isFollow = true;
// console.log(isFollow);


//Dynamically typed language
// fullName = 25
// console.log(fullName);


// Keywords in JS
var fullName = "Akhil Shetty M";
totalPrice = 1000;
console.log(fullName);

let fullNm = "Akhil Shetty M";

totalPrice = 1000;
console.log(fullName);

const age = 24;
// age = 86;
// age = 59;
console.log(age);


// Example 
const PI = 3.14;
console.log(PI);

let a; //Just this will give error so
a = 10
console.log(a);

const b = 10; // Declarations must be initialized like b = 10


// This is a block this dosen't pose any error.
{
    let c = 20;
    console.log(c);
}
{
    let c = 30;
    console.log(c);
}


//Obejcts collection of different values
const student = {
    fullName: "Akhil Shetty M",
    age: 22,
    cgpa: 8.56,
    isPass: true
};

student["age"] = student["age"] + 1;

console.log(student.age);