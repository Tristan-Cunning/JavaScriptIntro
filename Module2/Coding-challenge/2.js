// 2. Ask the user to enter an integer between 1 and 100. Validate your input and
// repeat asking the user for this input until the user succeeds.

let userInput = prompt("Please enter an integer between 1 and 100.");
while (isNaN(userInput) || userInput < 1 || userInput > 100) {
	userInput = prompt(
		"Invalid input. Please enter an integer between 1 and 100.",
	);
}

// 3. Extend exercise 2. Create an algorithm that guesses the
// number entered by the user optimally such that we always exclude at least
// half of the available numbers in the domain 1 to 100.
// In each step, console log the guess and console log whether the number to be
// guessed is lower, higher, or equal to the guess.
// Example: suppese the user entered 35. The computer's guesses:
// 50 lower (remaining interval: 1 to 49)
// 25 higher (remaining interval: 26 to 49)
// 38 lower (remaining interval: 26 to 38)
// 31 higher (remaining interval: 32 to 38)
// 35 match

// Cognitive walkthrough
// 1. Need to keep track of the range (1-100, 1-50, 51-100, 50-75, 76-100, etc.)
// 2. Check the number in the middle of the range (50, 25, 75, etc.)
// 3. If the guess is correct, stop.
// 4. If the guess is too low, update the low end of the range to be guess + 1.
// 5. If the guess is too high, update the high end of the range to be guess.

let low = 1;
let high = 100;

for (
	let guess = Math.floor((low + high) / 2);
	guess !== userInput;
	guess = Math.floor((low + high) / 2)
) {
	console.log(`Computer's guess: ${guess}`);
	if (guess > userInput) {
		console.log("Lower");
		high = guess;
	} else if (guess < userInput) {
		console.log("Higher");
		low = guess + 1;
	} else {
		console.log("Match!");
		break;
	}
}

/*
do {
	guess = Math.floor((low + high) / 2);
	console.log(`Computer's guess: ${guess}`);
	if (guess === userInput) {
		console.log("Match!");
		break;
	} else if (guess < userInput) {
		console.log("Higher");
		low = guess + 1;
	} else {
		console.log("Lower");
		high = guess;
	}
} while (guess !== userInput);
*/
