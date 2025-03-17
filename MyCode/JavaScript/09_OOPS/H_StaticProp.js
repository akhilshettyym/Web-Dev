// Defining a base class 'User'
class User {
    // Constructor to initialize the username property
    constructor(username) {
        this.username = username;
    }

    // Method to log the username
    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // Static method to create an ID (accessible only via the class, not instance)
    static createId() {
        return `123`;
    }
}

// Creating an instance of the User class
const akhil = new User('Akhil');

// Trying to access a static method using an instance will give an error
// console.log(akhil.createId()); //  Error: createId is not a function on the instance

// Defining a subclass 'Teacher' that extends 'User'
class Teacher extends User {
    constructor(username, email) {
        super(username); // Calls the parent class (User) constructor
        this.email = email;
    }
}

// Creating an instance of the Teacher class
const me = new Teacher("Me", "Me@gmail.com");

// Calling logMe() from the parent class (inherited method)
me.logMe(); // Output: Username: Me

// Trying to call a static method from an instance will give an error
// me.createId(); // Error: createId is not a function on the instance
// Calling the static method directly from the class
console.log(User.createId()); //  Output: 123