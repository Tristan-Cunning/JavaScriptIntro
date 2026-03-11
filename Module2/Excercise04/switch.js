let secret = Math.floor(Math.random() * 5);

// Solution 1: if else
if (secret === 0) {
	console.log("zero");
} else if (secret === 1) {
	console.log("one");
} else if (secret === 2) {
	console.log("two");
} else if (secret === 3) {
	console.log("three");
} else if (secret === 4) {
	console.log("four");
}

//Solution 2: Switch
switch (secret) {
	case 0:
		console.log("zero");
		break;
	case 1:
		console.log("one");
		break;
	case 2:
		console.log("two");
		break;
	case 3:
		console.log("three");
		break;
	default:
		console.log("four");
}

// Solution 3: Dictionary
let dict = {
	0: "zero",
	1: "one",
	2: "two",
	3: "three",
	4: "four",
};
console.log(dict[secret]);
