// Create a User class
class User {
    constructor(email, password) {
        this.email = email; // Triggers the setter
        this.password = password; // Triggers the setter
    }

    // Getter for email
    get email() {
        return this._email.toUpperCase(); // Returns the email in uppercase
    }

    // Setter for email
    set email(value) {
        this._email = value; // Sets the value of _email
    }

    // Getter for password
    get password() {
        return `${this._password}akhil`; // Appends "akhil" to the password when accessed
    }

    // Setter for password
    set password(value) {
        this._password = value; // Sets the value of _password
    }
}

// Create an instance of the User class
const akhil = new User("A@akhil.ai", "123");

// Access password using the getter
console.log(akhil.password); // Output: 123akhil

// Access email using the getter
console.log(akhil.email); // Output: A@AKHIL.AI