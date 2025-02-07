//Arithmatic Operators
let a = 5, b = 2;
console.log("a =", a,"& b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);


//Unary Operator
a = a + 1;
console.log("a =", a);
a++;
console.log("a =", a);
a--;
console.log("a =", a);

//Pre-Inrement
let c = 1;
console.log("++c =", ++c);
//Post-Inrement
let d = 1;
console.log("d++ =", d++);
console.log("d =", d);


//Assignment operators
let e = 5;
let f = 2;
e += 4;
console.log("e =", e);
e -= 4;
console.log("e =", e);
e %= 4;
console.log("e =", e);


//Comparison operators
let g = 5;
let h = 2;
console.log("g == h =", g == h);
console.log("g != h =", g != h);
console.log("g > h =", g > h);
console.log("g < h =", g < h);
console.log("g >= h =", g >= h);
console.log("g <= h =", g <= h);

let i = 5;
let j = 2;
let k = "5";
console.log("i === j =", i === j);      //Used to check strictly that is it checks the data types as well which == won't
console.log("i == k =", i == k);
console.log("i !== j =", i !== j);
console.log("i > j =", i > j);