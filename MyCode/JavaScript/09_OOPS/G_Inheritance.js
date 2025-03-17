// Defining a base class 'User'
class User {
    // Constructor to initialize username
    constructor(username) {
        this.username = username;
    }

    // Method to log the username
    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

// Defining a subclass 'Teacher' that extends from 'User'
class Teacher extends User {
    // Constructor to initialize username, email, and password
    constructor(username, email, password) {
        super(username); // Calls the constructor of the parent class (User)
        this.email = email; // Assigning email to the instance
        this.password = password; // Assigning password to the instance
    }

    // Method to add courses
    addCourses() {
        console.log(`A new course was added by ${this.username}`);
    }
}

// Creating an instance of the Teacher class
const chai = new Teacher("chai", "chai@123.com", "123");

// Calling the addCourses method on 'chai' instance
chai.addCourses(); // Output: A new course was added by chai

// Calling the logMe method (inherited from User class)
chai.logMe(); // Output: USERNAME is chai

// Creating an instance of the User class
const masalaChai = new User("masalaChai");

// Calling the logMe method on 'masalaChai' instance
masalaChai.logMe(); // Output: USERNAME is masalaChai

// masalaChai.addCourses(); //  Error: addCourses is not defined in User class

// Comparing two objects
console.log(chai === masalaChai); // Output: false (they are different instances)

// Checking if 'chai' is an instance of Teacher class
console.log(`Is chai an Instance of Teacher? ${chai instanceof Teacher}`); // Output: true

// Checking if 'chai' is an instance of User class (since Teacher extends User)
console.log(`Is chai an Instance of User? ${chai instanceof User}`); // Output: true