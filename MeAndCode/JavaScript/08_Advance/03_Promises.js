// Promise One - Basic Promise Example
const promiseOne = new Promise(function(resolve, reject){
    // Simulate an asynchronous task (e.g., DB calls, network requests)
    setTimeout(function(){
        console.log("Async task is complete");
        resolve(); // Mark the promise as resolved after 1 second
    }, 1000)
});

// Handle the resolved promise using .then()
promiseOne.then(function(){
    console.log("Promise consumed"); // Logs when the promise is successfully resolved
});


// Promise Two - Direct Creation and Handling
new Promise(function(resolve, reject){
    // Simulate another async task
    setTimeout(function(){
        console.log("Async task 2");
        resolve(); // Mark the promise as resolved
    }, 1000)
})
.then(function(){
    console.log("Async 2 resolved"); // Logs once the promise is resolved
});


// Promise Three - Returning an Object in a Promise
const PromiseThree = new Promise(function(resolve, reject){
    // Simulate an async task that returns an object
    setTimeout(function(){
        resolve({username: 'Akhil', email:'akhil@gmail.com'}) // Resolving with an object
    }, 1000)
});

// Handling the resolved promise
PromiseThree.then(function(user){
    console.log(user); // Logs the object {username: 'Akhil', email:'akhil@gmail.com'}
});


// Promise Four - Handling Errors and Chaining
const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulate an error condition
        if (!error) {
            resolve({username:'Akhil', password:'123'}); // Resolves the promise if no error
        } else {
            reject('ERROR: Something went wrong'); // Rejects the promise if error is true
        }
    }, 1000);
});

// Handling resolved and rejected states using .then() and .catch()
PromiseFour
.then((user) => {
    console.log(user); // Logs the resolved value (if no error)
    return user.username; // Passes the username to the next .then()
})
.then((username) => {
    console.log('Username is: ' + username); // Logs the username from the previous .then()
})
.catch(function(error){
    console.log(error); // Logs the error message if the promise is rejected
})
.finally(() => console.log("The promise is either resolved or rejected")); // Executes regardless of success or failure


// Promise Five - Using async/await for Cleaner Syntax
const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulate an error condition
        if(!error){
            resolve({username:"Javascript", password:"123"}); // Resolves with an object
        } else {
            reject('ERROR: JS went wrong'); // Rejects the promise
        }
    }, 1000);
});

// Async function to handle the promise using async/await
async function consumePromiseFive(){
    try {
        const response = await PromiseFive; // Waits for the promise to resolve or reject
        console.log(response); // Logs the resolved value if successful
    } catch (error) {
        console.log(error); // Catches and logs the error if promise is rejected
    }
}
consumePromiseFive();


// Fetch Example Using async/await (Corrected URL)
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch user data
        const data = await response.json(); // Convert response to JSON
        console.log(data); // Logs the fetched user data
    } catch (error) {
        console.log("Error:", error); // Catches and logs errors
    }
}
getAllUsers();


// Fetch Example Using .then()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json(); // Converts the response to JSON
})
.then((data) => {
    console.log(data); // Logs the fetched data
})
.catch((error) => console.log("Error:", error)); // Catches and logs errors