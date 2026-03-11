// 1. Console log all numbers
// a.) from 0 to 9 (inclusive).
// b.) from 1 to 10 (inclusive).
// c.) from 9 to 0 (inclusive).
// d.) from 10 to 1 (inclusive).
// e.) that are even between 1 and 25. Instead of the odd numbers, write "odd".

console.log("0-9");
for (let i = 0; i <= 9; i++) {
	console.log(i);
}

console.log("1-10");
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

console.log("9-0");
for (let i = 9; i >= 0; i--) {
	console.log(i);
}

console.log("10-1");
for (let i = 10; i >= 1; i--) {
	console.log(i);
}

console.log("Even numbers between 1 and 25");
for (let i = 1; i <= 25; i++) {
	if (i % 2 === 0) {
		console.log(i);
	} else {
		console.log("odd");
	}
}
