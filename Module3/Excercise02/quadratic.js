function getCoefficient(name) {
	let value = null;
	do {
		let str = prompt("Enter co-efficient " + name);
		value = Number.parseFloat(str);
	} while (Number.isNaN(value) || typeof value !== "number");
	return value;
}

function getCoefficients() {
	let a = getCoefficient("a");
	let b = getCoefficient("b");
	let c = getCoefficient("c");
	return [a, b, c];
}

function getDiscriminant(a, b, c) {
	return b ** 2 - 4 * a * c;
}

function printQuadraticSolutions(a, b, c) {
	//TOO DO
}

function printSingleSolution(a, b) {
	//TOO DO
}

function printComplexSolutions() {
	//TOO DO
}

function quadraticEquation(a, b, c) {
	// Step one: get a, b ,c
	[a, b, c] = getCoefficients();

	// Step 2: calculate b**2 - 4*a*c
	let discriminant = getDiscriminant(a, b, c);
	// Step 3: Determine how many solutions equation has and calculate them
	if (discriminant > 0) {
		printQuadraticSolutions(a, b, c);
	} else if (discriminant === 0) {
		printSingleSolution(a, b);
	} else {
		printComplexSolutions();
	}
}
