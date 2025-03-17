// Comparison Operators in JavaScript

// -----------------------------------------------------
// Basic Comparisons
// -----------------------------------------------------
console.log(2 > 1);  // true (2 is greater than 1)
console.log(2 >= 1); // true (2 is greater than or equal to 1)
console.log(2 < 1);  // false (2 is not less than 1)
console.log(2 == 1); // false (2 is not equal to 1)
console.log(2 != 1); // true (2 is not equal to 1)

// -----------------------------------------------------
// Type Conversion in Comparisons
// -----------------------------------------------------
console.log("2" > 1);  // true ("2" is converted to 2 before comparison)
console.log("02" > 1); // true ("02" is converted to 2 before comparison)

// -----------------------------------------------------
// Special Cases: null and undefined
// -----------------------------------------------------
console.log(null > 0);  // false (null is converted to 0 → 0 > 0 is false)
console.log(null == 0); // false (null only equals null and undefined)
console.log(null >= 0); // true (null is converted to 0 → 0 >= 0 is true)

// Why? 
// - `null` is treated as **0** in comparisons (`>`, `<`, `>=`, `<=`)
// - But `null` is NOT treated as **0** in equality (`==`)

// -----------------------------------------------------
// Comparing undefined
// -----------------------------------------------------
console.log(undefined == 0); // false (undefined is only equal to null)
console.log(undefined > 0);  // false (undefined cannot be converted to a valid number)
console.log(undefined < 0);  // false (undefined cannot be converted to a valid number)

// Why?
// - `undefined` is NOT converted to a number in comparisons
// - Any comparison with `undefined` results in **false** except `undefined == null` (which is true)

// -----------------------------------------------------
// Strict Equality (===) vs. Loose Equality (==)
// -----------------------------------------------------
console.log("2" == 2);  // true (string "2" is converted to number 2)
console.log("2" === 2); // false (strict check → types are different)
console.log(null == undefined);  // true (special case: they are loosely equal)
console.log(null === undefined); // false (strict check → different types)

// `==` performs **type coercion** (tries to convert types before comparing)
// `===` performs **strict comparison** (compares both value and type)