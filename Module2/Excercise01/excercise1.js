// Ask the user to enter a number and print its parity (even or odd, or NA).

let value = prompt("Enter a number: ");
let intValue = Number.parseInt(value);
if (Number.isNaN(intValue)) {
	console.log("NA");
} else if (intValue % 2 === 0) {
	console.log("Even");
} else {
	console.log("Odd");
}

if (intValue >= 2) {
	console.log("The number is greater than or equal to 2");
}
