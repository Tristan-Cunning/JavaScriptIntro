let userInput = null;

do {
	userInput = prompt("Enter some text");
} while (userInput === null || userInput.length === 0);
console.log(userInput + " is valid.");
