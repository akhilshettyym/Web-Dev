// Object Example
const user = {
    username: "Akhil",
    loginCount: 8,
    isLogin: true,

    // Method to get user details
    getUserDetails: function(){
        // Output the username using 'this'
        console.log(`Username: ${this.username}`);

        // 'this' refers to the current object
        console.log(this);      
    }
}

// Accessing object properties
console.log(user.username); // Output: Akhil

// Accessing the function itself without calling it
console.log(user.getUserDetails); // Output: [Function: getUserDetails]

// 'this' outside of an object refers to the global object (window in browser)
console.log(this); 

// ---------------------------------------------------------------------------------

// Constructor Function
// A constructor function allows you to create multiple objects with the same structure
function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this; // Returning the instance itself
}

/* 
Problem:
If you create two instances without `new`, the second instance will overwrite the first one.
Example:
const userOne = User("Akhil", 12, true)
const userTwo = User("MyCode", 11, false)
console.log(userOne); // Output: userTwo data, because userOne is overwritten
*/
// ---------------------------------------------------------------------------------

// Solution:
// Using `new` creates separate instances without overwriting
const userOne = new User("Akhil", 12, true);
const userTwo = new User("MyCode", 11, false);

// Output the details of both instances
console.log(userOne); // Output: { userName: 'Akhil', loginCount: 12, isLoggedIn: true }
console.log(userTwo); // Output: { userName: 'MyCode', loginCount: 11, isLoggedIn: false }

// ---------------------------------------------------------------------------------

// How `new` works internally:
// 1. Creates an empty object: `{}`
// 2. Sets the `this` keyword to reference the new object
// 3. Binds properties and methods to the new object
// 4. Returns the new object