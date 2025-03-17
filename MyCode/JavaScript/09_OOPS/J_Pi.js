// Get the property descriptor of Math.PI
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter); 
// Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

// Attempt to modify Math.PI (it won't change because writable is false)
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI); // Output: 3.141592653589793

// Create an object with properties and methods
const chai = {
    name: 'Kashmiri chasi',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log('Order chai');
    }
}

// Get the descriptor of 'name' property
console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
// Output: { value: 'Kashmiri chasi', writable: true, enumerable: true, configurable: true }

// Modify descriptor using Object.defineProperty()
Object.defineProperty(chai, 'name', {
    writable: false,       // Cannot change value
    enumerable: false      // Will not appear in loops
})
console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
// Output: { value: 'Kashmiri chasi', writable: false, enumerable: false, configurable: true }

// Loop through object properties using Object.entries()
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}
// Output: price: 250
//         isAvailable: true