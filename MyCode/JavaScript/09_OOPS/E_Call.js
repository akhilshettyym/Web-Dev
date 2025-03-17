// Function to set the username (simulates a complex database call)
function SetUserName(username) {
    // Assigning the username to the current context using 'this'
    this.username = username
    console.log("Called"); // Logs when the function is executed
}

// Function to create a new user object
function createUser(username, email, password) {
    // Using 'call' to invoke SetUserName in the current context of 'createUser'
    // 'call' allows you to explicitly define the 'this' value
    SetUserName.call(this, username)

    // Assign additional properties to the current context (this)
    this.email = email
    this.password = password
}

// Create a new user instance using the 'new' keyword
const chai = new createUser("chai", "chai@123.com", "123")
console.log(chai);