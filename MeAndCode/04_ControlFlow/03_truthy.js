// Truthy

const userEmail = "akhil@google";
// const userEmail = "";
// const userEmail = []];

if (userEmail){
    console.log("Got the user userEmail...");
}else{
    console.log("User Email is not available...");
}

/* flasy values
* false, 0, -0, "", BigInt, "", null, undefined, NaN

* truthy values
* true, 1, "akhil", [], {}, function(){}, 3.14, 'false'
*/

// if (userEmail.length === 0) {
//     console.log("User Email is not available...");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty...");
}