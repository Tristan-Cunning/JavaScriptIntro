console.log(5, typeof 5);
console.log(5.2, typeof 5.2);
console.log(2n, typeof 2n);
console.log("Text", typeof "Text");
console.log(true, typeof true);
console.log(false, typeof false);
console.log(null, typeof null);
console.log(undefined, typeof undefined);

//Functions
let twoX = (x) => 2 * x;
let prod = (a, b = 1) => a * b; //If b is not provided, it will default to 1
let prod2 = function (a, b = 1) {
	return a * b;
};

//Objects
let owner = {
	firstname: "Frank", //Constructor
	lastname: "Owner", //Constructor
	age: 72, //Constructor
};

owner.id = 1923823298; //Adding a new property to the object
