const course = {
    courseName: "Js crash",
    courseDuration: "3 months",
    coursePrice: 1000,
    courseInstructor: "Akhil"
}

// Destructuring to extract values from the object
const { courseInstructor } = course;
const { courseName: name } = course;  // Renaming courseName to 'name'

console.log(courseInstructor); // ✅ "Akhil"
console.log(name);            // ✅ "Js crash"

// How It Works
// Destructuring takes the property of the object and assigns it to a variable with the same name.
// You can also rename the variable during destructuring (e.g., courseName: name renames courseName to name).

// Working with JSON API Data
// JSON (JavaScript Object Notation) is a lightweight data format that is commonly used to transmit data between a client and server. It looks like this:

// json
// Copy
// Edit
// {
//     "name": "Akhil",
//     "age": 25,
//     "occupation": "Developer"
// }