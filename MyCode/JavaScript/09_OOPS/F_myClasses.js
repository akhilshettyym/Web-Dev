// ES6 Class Syntax

// Defining a class called 'User'
class User {
    // Constructor method is called when a new object is created
    constructor(username, email, password){
        this.username = username; // Assigning username to the instance
        this.email = email; // Assigning email to the instance
        this.password = password; // Assigning password to the instance
    }

    // Method to encrypt the password by adding 'abc' at the end
    encryptPassword(){
        return `${this.password}abc`;
    }

    // Method to convert the username to uppercase
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

// Creating a new instance of the User class
const chai = new User("chai", "chai@gmail.com", "123");

// Calling the changeUsername method on the 'chai' instance
console.log(chai.changeUsername()); // Output: CHAI


// Behind the Scenes - How JavaScript implements classes internally using prototypes

// Defining a constructor function called 'User'
function User(username, email, password){
    this.username = username; // Assigning username to the instance
    this.email = email; // Assigning email to the instance
    this.password = password; // Assigning password to the instance
}

// Defining a method on the prototype to encrypt the password
User.prototype.encryptPassword = function(){
    return `${this.password}abc`; // Appending 'abc' to the password
}

// Defining a method on the prototype to convert the username to uppercase
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`; // Converting username to uppercase
}

// Creating a new instance using the constructor function
const tea = new User("tea", "tea@gmail.com", "123");

// Calling the changeUsername method on the 'tea' instance
console.log(tea.changeUsername()); // Output: TEA