let [first, { a: secondValue }] = [{ a: 1 }, { a: 2 }, { a: 5 }];
// let first = {a : 1}
// let secondValue = 2
// a links them together.
let a = 2;
let b = 1;

console.log(a, b);
// a = 2; b = 1;
[a, b] = [b, a];
// [a, b] = [b, a];
// a = 1; AND b = 2; in parallel.
console.log(a, b);
