// If

// const isUserLoggedIn = true; 
// const temperature = 41;
// if(temperature < 50){
//     console.log("The user is logged in and the temperature is below 50");
//     }else{
//         console.log("The user is logged in and the temperature is above 50");
// }
// console.log("Executed");

// const score = 200;
// if(score >= 100){
//     const power = "fly";
//     console.log(`The user has a power of ${power}`);
// }

const balance = 1000;
// if (balance > 500) console.log("test");

// if (balance < 500){
//     console.log("Less than");
// }else if (balance < 750){
//     console.log("Less than 750");
// }else if (balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Greater than 900");
// }

const isUserLoggedIn = true;
const debitCard = true;
const isUserLoggedInFromGoogle = false;
const isUserLoggedInFromEmail = true;

if (isUserLoggedIn && debitCard){
    console.log("User is logged in and has a debit card");
}

if (isUserLoggedInFromGoogle || isUserLoggedInFromEmail){
    console.log("User is logged in from Google or Email");
}