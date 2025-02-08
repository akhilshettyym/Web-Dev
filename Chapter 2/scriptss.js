// Exercises

//Get users to input a number using prompt("Enter a number:"). Check if the number is a mulitple of 5 or not.
let no = prompt("Enter a number : ");
if (no % 5 === 0){
    console.log(no, "The number is a multiple of 5");
} else {
    console.log(no, "The number is not a multiple of 5");
}

//Write a code which can give grades to students according to their scores
let score = prompt("Enter your score: ");
if (score >= 90 && score <= 100) {
    console.log("Grade A");
} 
else if (score >= 70 && score <= 89) {
    console.log("Grade B");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade C");
    }
else if (score >= 50 && score <= 59) {
    console.log("Grade D");
}
else {
    console.log("Grade F");
}

//Write a code which can give grades to students according to their scores
let score_ = prompt("Enter your score: ");
if (score_ >= 90 && score_ <= 100) {
    console.log("Grade A");
    }
    else if (score_ >= 70 && score_ <= 89) {
        console.log("Grade B");
        }
        else if (score_ >= 60 && score_ <= 69) {
            console.log("Grade C");
            }
            else if (score_ >= 50 && score_ <= 59) {
                console.log("Grade D");
                }
                else {
                    console.log("Grade F");
                    }
                    