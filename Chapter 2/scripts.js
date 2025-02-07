// CONDITIONAL STATEMENTS 
// To implementc some condition in the code  
// IF STATEMENT
let age = 25;
if (age >= 18){
    console.log("You can vote");
}

if (age < 18){
    console.log("You cannot vote");
}

//Dark mode and light mode
let mode = "dark";
let color;

if (mode === "dark"){
    color = "black";
}
if (mode === "light"){
    color = "white";
}
console.log(color);

//IF ELSE statement
let mode_1 = "light";
let color_1;

if (mode_1 === "dark"){
    color_1 = "black";
}
else {
    color_1 = "white";
}
console.log(color_1);

//Odd or Even
let num = 10;
if (num % 2 === 0 ) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}

//ELSE IF statements
let ag = 19;
if (ag >= 18) {
    console.log("Junior");
} else if (ag >= 60){
    console.log("Senior");
} else {
    console.log("Youth");
}

//Dark mode
let mod = "dark";
let col;

if (mod === "dark") {
    col = "black";
} else if (mod === "blue"){
    col = "blue";
} else if (mod === "grey"){
    col = "grey";
} else {
    col = "white";
}

console.log("col")