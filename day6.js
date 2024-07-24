// day6 Array
const arr = [1, 2, 3, 4, 5];

console.log(arr, arr[0], arr[arr.length - 1]);

// Arrau methods
arr.push(10);
console.log(arr, "Push");
arr.pop();
console.log(arr, "Pop");
arr.shift();
console.log(arr, "shift");
arr.unshift(20);
console.log(arr, "unshift");

const data = arr.map((ele) => ele + ele);
console.log(data, "map");

const filterData = arr.filter((ele) => ele % 2 == 0);
console.log(filterData, "filter");

const totalData = arr.reduce(
  (accumulator, currentval) => accumulator + currentval,
  5
);

console.log(totalData, "reduce");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], "for iteration");
}

arr.forEach((element) => {
  console.log(element, "map iteration");
});

// multidimentional array
const arr2 = [
  [1, 3],
  [2, 4],
];

console.log(arr2, arr2[0][0], "2d array");
