// Creating Objects
const tinderUser = {}; // Non-singleton object

// Adding properties dynamically
tinderUser.id = "123456dfg";
tinderUser.name = "Samy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


// Nested Object Example
const regularUser = {
    email: "akhilshettym.com",
    fullName: {
        userFullName: {
            firstName: "Akhil",
            lastName: "Shetty"
        }
    }
};

// Accessing nested properties
console.log(regularUser.fullName);  // { userFullName: { firstName: "Akhil", lastName: "Shetty" } }
console.log(regularUser.fullName.userFullName);  // { firstName: "Akhil", lastName: "Shetty" }
console.log(regularUser.fullName.userFullName.firstName);  // "Akhil"


// Merging Objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "r", 6: "f" };

// Merging using Object.assign()
const obj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj3);  // { 1: "a", 2: "b", 3: "c", 4: "d", 5: "r", 6: "f" }

// Merging using Spread Operator
const objSpread = { ...obj1, ...obj2, ...obj4 };
console.log(objSpread);  // Same result as above


// Working with Objects in Arrays

const users = [
    { id: 1, name: "Akhil", age: 25 },
    { id: 2, name: "Samy", age: 30 },
    { id: 3, name: "Rohan", age: 35 }
];

// Accessing an object's property in an array
console.log(users[1].name); // "Samy"


// Object Methods

console.log(Object.keys(tinderUser));   // ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser)); // ["123456dfg", "Samy", false]
console.log(Object.entries(tinderUser)); // [ ["id", "123456dfg"], ["name", "Samy"], ["isLoggedIn", false] ]

// Checking if a property exists in an object
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('email')); // false