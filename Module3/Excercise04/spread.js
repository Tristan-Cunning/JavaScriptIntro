let arr = [1, 2, 5];
// ... is the spread operator. It takes an array and spreads it out into individual elements.
[5, ...arr, ...arr];
// [5, 1, 2, 5, 1, 2, 5]
// ...arr is the same as 1, 2, 5. It takes the elements of the array and spreads them out.
let mixin1 = {
	id: "123456AB",
};
let mixin2 = {
	age: 25,
	biologicalAge: 24,
};
let person = {
	first: "Jack",
	last: "Young",
	...mixin1,
	...mixin2,
};
