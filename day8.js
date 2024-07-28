// ES6+ Features

let name = "shagun";
let age = 24;

console.log(`name: ${name} age:${age}`);
console.log(`hi my name is shagun 
    i am React develper
    i working in digiMantra Labs company`);

// Destructuring
const arr = [2, 4, 5, 6, 7];
const [first, four] = arr;
console.log(first, four);

const book = { author: "shagun", Age: "15" };
let { author, Age } = book;
console.log("destructuring", author, Age);

// spred and rest operators

console.log(...arr, "spread operatoer");
console.log(([one, two, ...rest] = arr), "rest operatoer");
console.log({ ...book }, ({ Age, ...rest } = book));

function dValue(num1, num2 = 1) {
  return num1 * num2;
}

console.log(dValue(12));
// Enhanced Object Literals
function data(name, rollNo, age) {
  return {
    name,
    rollNo,
    age,
  };
}

const name2 = "name";

const boyname = {
  [name2]: " rahul",
};

console.log(boyname.name);
