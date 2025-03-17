// User details
const balance = 1000;
const isUserLoggedIn = true;
const hasDebitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// 1. Simplified conditional statement (Single-line if)
if (balance > 500) console.log("User has sufficient balance.");

// 2. Improved range checking using a single if-else structure
if (balance < 500) {
    console.log("Balance is less than 500.");
} else if (balance < 750) {
    console.log("Balance is less than 750.");
} else if (balance < 900) {
    console.log("Balance is less than 900.");
} else {
    console.log("Balance is greater than 900.");
}

// 3. Checking multiple conditions with AND (&&) for better readability
if (isUserLoggedIn && hasDebitCard) {
    console.log("User is logged in and has a debit card.");
}

// 4. Using OR (||) operator to check multiple login methods
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is logged in from Google or Email.");
}