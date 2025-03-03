// 🔹 JavaScript Date Object

// ✅ Creating a New Date Object (Current Date & Time)
let myDate = new Date();
console.log(myDate); // ✅ Output: Current Date Object
console.log(myDate.toString()); // ✅ Full date & time as string
console.log(myDate.toDateString()); // ✅ Human-readable date
console.log(myDate.toJSON()); // ✅ ISO format
console.log(myDate.toLocaleTimeString()); // ✅ Only time in local format
console.log(myDate.toISOString()); // ✅ International format (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(myDate.toLocaleString()); // ✅ Full date & time in local format
console.log(typeof myDate); // ✅ Output: "object" (Date is an object)


// -----------------------------------------------------
// 🔹 Creating Custom Dates
// -----------------------------------------------------

// ✅ Creating a Date (YYYY, MM, DD) → Month starts from 0 (0 = Jan, 11 = Dec)
let myCreatedDate = new Date(2025, 0, 10); // 10th Jan 2025
console.log(myCreatedDate.toDateString()); // ✅ Output: "Fri Jan 10 2025"

// ✅ Creating a Date Using ISO String (YYYY-MM-DD)
let myCreatedDate1 = new Date("2025-01-10");
console.log(myCreatedDate1.toDateString()); // ✅ Output: "Fri Jan 10 2025"

// ✅ Creating a Date Using MM-DD-YYYY Format
let myCreatedDate2 = new Date("01-14-2025");
console.log(myCreatedDate2.toDateString()); // ✅ Output: "Tue Jan 14 2025"


// -----------------------------------------------------
// 🔹 Working with Timestamps
// -----------------------------------------------------

// ✅ Getting the Current Timestamp (Milliseconds since Jan 1, 1970)
let myTimeStamp = Date.now();
console.log(myTimeStamp); // ✅ Output: 1700000000000 (varies)

// ✅ Converting Timestamp to Seconds
console.log(Math.floor(Date.now() / 1000)); // ✅ Output: Seconds (Unix Time)


// -----------------------------------------------------
// 🔹 Extracting Date Components
// -----------------------------------------------------

let newDate = new Date();
console.log(newDate.getMonth() + 1); // ✅ Output: Current Month (1-12)
console.log(newDate.getDay()); // ✅ Output: Day of the week (0 = Sunday, 6 = Saturday)


// -----------------------------------------------------
// 🔹 Formatting a Date
// -----------------------------------------------------

// ✅ Formatting Date with Custom Options
let formattedDate = newDate.toLocaleDateString('default', {
    weekday: 'long',  // "Monday", "Tuesday"...
    year: 'numeric',  // "2025"
    month: 'long',    // "January", "February"...
    day: 'numeric'    // "14"
});
console.log(formattedDate); // ✅ Example Output: "Wednesday, February 7, 2025"