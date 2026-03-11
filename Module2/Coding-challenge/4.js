// 4. Think of a number between 1 and 100, but don't tell this to the computer.
// Once the computer guesses a number based on the rules seen in exercise 3,
// tell the computer if your number is greater than, less than, or equal to the
// guess of the computer. The computer continues guessing until it guesses your
// number correctly.
let low = 1;
let high = 100;
let response = null;
for (
	let guess = Math.floor((low + high) / 2);
	response !== "=";
	guess = Math.floor((low + high) / 2)
) {
	console.log(`Computer's guess: ${guess}`);
	response = prompt(
		"Is your number higher (>), lower (<), or equal (=) to" +
			guess +
			"? (Enter >, <, or =)",
	);
	if (response === "<") {
		console.log("Lower");
		high = guess;
	} else if (response === ">") {
		console.log("Higher");
		low = guess + 1;
	} else if (response === "=") {
		console.log("Match!");
		break;
	}
}
