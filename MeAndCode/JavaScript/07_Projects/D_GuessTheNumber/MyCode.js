// Generate a random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1);

// Select DOM elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
// const remaining = document.querySelector('.remaining');

// Creating a paragraph element for the new game button
const p = document.createElement('p');

// Variables to track game state
let prevGuess = []; // Store previous guesses
let numGuess = 1;   // Track number of guesses
let playGame = true; // Track if the game is active

// If the game is active, listen for submit button click
if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form from submitting
        const guess = parseInt(userInput.value);
        validateGuess(guess); // Pass the user input to validation function
    });
}

// Function to validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) { // If the input is not a number
        alert('Please enter a valid number!');
    } else if (guess < 1) { // If the guess is less than 1
        alert('Please enter a number greater than 1!');
    } else if (guess > 100) { // If the guess is greater than 100
        alert('Please enter a number less than 100!');
    } else {
        prevGuess.push(guess); // Store the guess

        // If this is the 11th guess, end the game
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. The random number was ${randomNumber}`);
            endgame(); // Call endgame function
        } else {
            displayGuess(guess); // Display the guess
            checkGuess(guess); // Check if the guess is correct
        }
    }
}

// Function to check if the guess is correct
function checkGuess(guess) {
    if (guess === randomNumber) { // If the guess matches the random number
        displayMessage(`You guessed it right!  WINNER!`);
        endgame(); // End the game
    } else if (guess < randomNumber) { // If the guess is too low
        displayMessage(`The number is too low! Try again.`);
    } else if (guess > randomNumber) { // If the guess is too high
        displayMessage(`The number is too high! Try again.`);
    }
}

//  Function to display the guess and update remaining attempts
function displayGuess(guess) {
    userInput.value = ''; // Clear the input field
    guessSlot.innerHTML += `${guess}, `; // Display the guess
    numGuess++; // Increment the guess count
    lastResult.innerHTML = `${11 - numGuess}`; // Update using lastResult
}


// Function to display a message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Display message in the DOM
}

//  Function to end the game
function endgame() {
    userInput.value = ''; // Clear input field
    userInput.setAttribute('disabled', ''); // Disable input field
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
    startOver.appendChild(p); // Add the new game button to the DOM
    playGame = false; // Disable game state
    newGame(); // Call new game function
}

//  Function to reset the game and start a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function() {
        // Reset values and state
        randomNumber = parseInt(Math.random() * 100 + 1); // Generate new random number
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lastResult.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled'); // Enable input field
        startOver.removeChild(p); // Remove new game button
        playGame = true; // Re-enable the game
    });
}