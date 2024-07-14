// activity

//  Aritmatic Operations
console.log("Aritmatic Operations");

function ADD(a, b) {
  console.log("ADD ", a + b);
}

ADD(2, 4);

function SUB(num1, num2) {
  console.log("SUB ", num1 - num2);
}

SUB(4, 3);

function MUL(num1, num2) {
  console.log("MUL ", num1 * num2);
}

MUL(2, 4);

function DIV(num1, num2) {
  console.log("DIV ", num1 / num2);
}

DIV(10, 2);

function REMINDER(num1, num2) {
  console.log("REMINDER ", num1 % num2);
}

REMINDER(15, 2);

// Assignment Operation
console.log("Assignement Operation");

let a = 10;
a += 10;
console.log("+= ", a);

let b = 20;
b -= 10;
console.log("-= ", b);

// Comparison Operation
console.log("Comparison Operation");

const num1 = 20;
const num2 = 22;
const num3 = 10;

console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 < num2);
console.log(num1 === num2);

// Logiical Operations
console.log("Logical Operation &&,||, !");

console.log(num1 > 10 && num2 > 20);
console.log(num1 > 10 || num2 < 10);
console.log(!num1 == 20);
