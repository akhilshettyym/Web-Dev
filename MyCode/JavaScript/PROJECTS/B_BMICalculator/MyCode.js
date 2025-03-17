const form = document.querySelector('form');

// This usecase will give empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Determine the BMI category
        let status = "";
        if (bmi < 18.6) {
            status = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            status = "Normal";
        } else {
            status = "Overweight";
        }

        // Display BMI and status
        results.innerHTML = `<span>Your BMI is ${bmi} — ${status}</span>`;
    }
});