// Declaring a constant variable (its value cannot be changed)
const accountId = 124353;

// Declaring variables using let (their values can be updated)
let accountEmail = "akhilshettym2003@gmail.com";

// Declaring a variable using var (not recommended due to scope issues)
var accoundPassword = "123456";

// Declaring a variable without using let/const/var (becomes global by default, which is bad practice)
accountId = "Jaipur";

// Declaring a variable without initializing it (default value will be undefined)
let accountState;

// Trying to reassign a constant (This will cause an error)
// accountId = 2;  // Not allowed - Uncaught TypeError: Assignment to constant variable.

// Updating values of let and var variables (Allowed)
accountEmail = "hc@hc.com";
accoundPassword = "323232";
const accountCity = "Mangaluru";

// Printing variables to console
console.log(accountId); // 124353 (original value remains unchanged)
console.log(accountEmail); // "hc@hc.com"
console.log(accoundPassword); // "323232"
console.log(accountCity); // "Mangaluru"

// Displaying multiple values in a table format for better readability
console.table([accountId, accountEmail, accoundPassword, accountCity, accountState]);

/*
Prefer not to use VAR because:
- It does not follow block scope (can lead to unexpected behavior).
- Let and const provide better scoping rules.
- Modern JavaScript best practices recommend using let and const.
*/