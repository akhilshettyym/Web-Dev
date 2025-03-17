// Merging Two Arrays
const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Batman", "Superman", "Flash"];

// Using push (Incorrect way, it adds an array inside another array)
marvel_heros.push(dc_heros);
console.log(marvel_heros); 
// Output: ['Thor', 'Ironman', 'Spiderman', ['Batman', 'Superman', 'Flash']]
console.log(marvel_heros[3][1]); // Output: "Superman" (Accessing nested array)

// Using concat without assigning it (concat does not modify the original array)
marvel_heros.concat(dc_heros);
console.log(marvel_heros);  
// Output: ['Thor', 'Ironman', 'Spiderman', ['Batman', 'Superman', 'Flash']]

// Correct way to merge arrays using `concat()`
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); 
// Output: ['Thor', 'Ironman', 'Spiderman', 'Batman', 'Superman', 'Flash']

// Merging arrays using the Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros];  
console.log(all_new_heros); 
// Output: ['Thor', 'Ironman', 'Spiderman', 'Batman', 'Superman', 'Flash']


// Flattening Nested Arrays

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Using `flat(Infinity)` to flatten deeply nested arrays
const real_another_array = anotherArray.flat(Infinity);
console.log(real_another_array);  
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// Checking and Converting Arrays

console.log(Array.isArray("Akhil")); // false (Not an array)
console.log(Array.from("Akhil"));    
// Output: ['A', 'k', 'h', 'i', 'l'] (Converts string to array)

// Array.from({name: "Akhil"}) returns an empty array
console.log(Array.from({name: "Akhil"})); 
// Output: [] (Objects cannot be converted into arrays this way)


// Creating Arrays from Variables

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Using `Array.of()` to create an array from multiple values
console.log(Array.of(score1, score2, score3));  
// Output: [100, 200, 300]