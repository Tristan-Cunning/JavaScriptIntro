function getInput() {
	let userInput = prompt("Please enter an integer between 1 and 100.");
	while (isNaN(userInput) || userInput < 1 || userInput > 100) {
		userInput = prompt(
			"Invalid input. Please enter an integer between 1 and 100.",
		);
	}

	return userInput;
}

function printResult(mid, direction, minValue, maxValue) {
	console.log(`${mid} ${direction} (interval: ${minValue} - ${maxValue})`);
}
function guessTheNumber() {
	let low = 1;
	let high = 100;
	let userInput = getInput();
	for (
		let guess = Math.floor((low + high) / 2);
		guess !== userInput;
		guess = Math.floor((low + high) / 2)
	) {
		console.log(`Computer's guess: ${guess}`);
		if (guess > userInput) {
			printResult(guess, "Lower", low, high);
			high = guess;
		} else if (guess < userInput) {
			printResult(guess, "Higher", low, high);
			low = guess + 1;
		} else {
			printResult(guess, "Match!", low, high);
			break;
		}
	}
}
