const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the month (1-12 or month name): ", (monthInput) => {
    const monthNumber = Number(monthInput);
    let monthName = "";

    switch (monthNumber || monthInput.toLowerCase()) {
        case 1: case "january":
            monthName = "January";
            break;
        case 2: case "february":
            monthName = "February";
            break;
        case 3: case "march":
            monthName = "March";
            break;
        case 4: case "april":
            monthName = "April";
            break;
        case 5: case "may":
            monthName = "May";
            break;
        case 6: case "june":
            monthName = "June";
            break;
        case 7: case "july":
            monthName = "July";
            break;
        case 8: case "august":
            monthName = "August";
            break;
        case 9: case "september":
            monthName = "September";
            break;
        case 10: case "october":
            monthName = "October";
            break;
        case 11: case "november":
            monthName = "November";
            break;
        case 12: case "december":
            monthName = "December";
            break;
        default:
            monthName = "Invalid month";
    }

    console.log("Month:", monthName);
    rl.close();
});