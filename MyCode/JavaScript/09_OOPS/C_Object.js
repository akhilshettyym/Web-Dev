function multiplyBy5(num){
    return num * 5
}
multiplyBy5.power = 2
console.log(multiplyBy5(10));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score){
    this.username = username 
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const vtea = createUser("tea", 250)

chai.printMe()

/*

When you use the new keyword in JavaScript, it creates a new object and sets up a relationship between that object and the prototype of the constructor function. Here's a detailed explanation of what happens step-by-step behind the scenes:

How new Works Internally
When you write something like this:
function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new User("Akhil", 12, true);
JavaScript internally performs four main steps when new is used:

1. Creates a new empty object
A new object is created in memory.
This object is initially empty {}.
Equivalent to:
let obj = {};
2. Sets the prototype of the new object
The newly created object’s __proto__ property is linked to the prototype of the constructor function.
Equivalent to:
obj.__proto__ = User.prototype;
This allows the new object to inherit methods and properties from the constructor's prototype.
3. Binds this to the new object
The this keyword inside the constructor function is set to point to the newly created object.
Equivalent to:

javascript
Copy
Edit
User.call(obj, "Akhil", 12, true);
Now, this.userName = userName sets userName on the new object.
4. Returns the new object
If the constructor function does not return an object, the new object is returned automatically.
Equivalent to:
return obj;
Example with Internal Steps
Given this code:
function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new User("Akhil", 12, true);
Internally, it works like this

function User(userName, loginCount, isLoggedIn) {
    let obj = {}; // Step 1: Create a new empty object
    
    obj.__proto__ = User.prototype; // Step 2: Set prototype
    
    this = obj; // Step 3: Bind 'this' to the new object
    
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return obj; // Step 4: Return the new object
}
Why new is Important
Without new, this would refer to the global object (window in browsers) or undefined in strict mode.
new ensures that each object created using the constructor function is independent and inherits from the constructor’s prototype.

*/