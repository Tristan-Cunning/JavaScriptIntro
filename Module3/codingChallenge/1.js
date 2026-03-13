// 1. Create a function that calculates the nth fibonacci number based on the
// definition.
// fib(0) is 0.
// fib(1) is 1.
// fib(n) is fib(n-1)+fib(n-2) for n >= 2

function fib(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;

	return fib(n - 1) + fib(n - 2);
}

console.log(fib(0)); // 0
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 3
console.log(fib(4)); // 5
console.log(fib(5)); // 7
console.log(fib(6)); // 9
console.log(fib(7)); // 11
console.log(fib(15));
