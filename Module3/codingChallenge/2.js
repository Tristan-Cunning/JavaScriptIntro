// 2. Create a function that accepts an array and increments each value in the
// array by 1. You can assume the input only contains numbers. Then print the
// return value of the array and the original array to the console. Make sure
// the original array stays intact

function incrementArray(arr) {
	let incrementedArr = structuredClone(arr);
	for (let i = 0; i < incrementedArr.length; i++) {
		incrementedArr[i]++;
	}
	return incrementedArr;
}

let originalArray = [1, 2, 3, 4, 5];
let incrementedArray = incrementArray(originalArray);
console.log("Incremented Array:", incrementedArray);
console.log("Original Array:", originalArray);

originalArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
incrementedArray = incrementArray(originalArray);
console.log("Incremented Array:", incrementedArray);
console.log("Original Array:", originalArray);
