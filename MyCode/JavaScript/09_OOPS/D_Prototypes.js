// STRING TRIMMING AND LENGTH CALCULATION
let myName = "Akhil   "
let myGit = "Gittuuu      "

// Length of the string including spaces
console.log(`Length of the name is ${myName.length}`);

// Length of the string after trimming spaces
console.log(`Length using trim ${myName.trim().length}`);

// Adding a custom method to the String prototype
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

let anotherUsername = "MyCode      "
anotherUsername.trueLength() // Output: Trimmed length
"akhil".trueLength()
"iceTea".trueLength()


// ARRAYS AND OBJECT PROTOTYPES
let myHeros = ["Thor", "SpiderMan"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// Adding a custom method to all objects using Object.prototype
Object.prototype.akhil = function(){
    console.log("Akhil is the best");
}

// Adding a custom method to all arrays using Array.prototype
Array.prototype.heyAkhil = function(){
    console.log("I am there in array now");
}

// Calling the methods
heroPower.akhil(); // Works because heroPower is an object
myHeros.akhil();   // Works because arrays inherit from Object
myHeros.heyAkhil(); // Works because it’s an array-specific method
// heroPower.heyAkhil(); // Error because heroPower is not an array


// INHERITANCE USING __proto__
const User = {
    name: "Akhil",
    age: 25,
    email: "akhilshettym@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport // Setting prototype using __proto__
}

// Teacher inherits from User
Teacher.__proto__ = User

// Modern Syntax for inheritance using Object.setPrototypeOf
Object.setPrototypeOf(TeachingSupport, Teacher)

// Example of accessing inherited properties
console.log(TASupport.isAvailable); // false (direct property)
console.log(TASupport.makeVideo);   // true (inherited from Teacher)
console.log(Teacher.name);          // Akhil (inherited from User)



let anotherUserName = "MyCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}
anotherUsername.trueLength()

"akhil".trueLength()
"iceTea".trueLength()