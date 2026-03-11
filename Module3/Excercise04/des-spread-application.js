function logName(name) {
	let first = name.first;
	let last = name.last;
	console.log(`${first} ${last}`);
}
// With destructuring
function logNameDestructured(name) {
	let { first, last: last } = name; // object property shorthand notation:
	console.log(`${first} ${last}`);
}

let name = {
	first: `First`,
	last: `Last`,
};
logName(name);
