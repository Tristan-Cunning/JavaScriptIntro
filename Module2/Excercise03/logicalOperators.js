console.log("Logical AND Operators");
console.log("false && false -->", false && false);
console.log("false && true -->", false && true);
console.log("true && false -->", true && false);
console.log("true && true -->", true && true);

console.log("Logical OR Operators");
console.log("false || false -->", false || false);
console.log("false || true -->", false || true);
console.log("true || false -->", true || false);
console.log("true || true -->", true || true);

console.log("negation");
console.log("!false -->", !false); // ! is the negation operator, it turns true to false and false to true
console.log("!true -->", !true); // ! is the negation operator, it turns true to false and false to true

console.log("exclusive or operation");

let a = false;
let b = true;
let axorb = (!a && b) || (a && !b); // exclusive or operation, it returns true if one of the operands is true and the other is false, otherwise it returns false
console.log("a XOR b", axorb);
