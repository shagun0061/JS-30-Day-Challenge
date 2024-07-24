// Functions
function chekOddEven(num) {
  if (num % 2 === 0) {
    console.log(num, "is Even");
    return;
  }

  console.log(num, "is Odd");
}

chekOddEven(4);
chekOddEven(5);

function checkSquar(num) {
  console.log("squar of ", num, "is", num * num);
}

checkSquar(5);

function maxNum(a, b) {
  if (a > b) {
    return "a is greater";
  }
  return "b is greater";
}

console.log(maxNum(4, 8));

function addTwoString(str1, str2) {
  return str1 + str2;
}

console.log(addTwoString("shagun", "sharma"));

const checkGreater2 = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} is greate`;
  }

  return `${num2} id greater`;
};

checkGreater2(6, 2);

const checkSpecialChar = (str) => {
  const specialChar = ["@", "#", "$", "&", "*"];
  for (let i = 0; i < specialChar.length; i++) {
    if (str.includes(specialChar[i])) {
      return true;
    }
    return false;
  }
};

console.log("check special character", checkSpecialChar("Sh@gun"));

const productFun = (num1, num2 = 10) => {
  return num1 * num2;
};
console.log(productFun(45));

const greetings = (name, age = 18) => {
  return `Happy ${age} Birtday ${name}`;
};

console.log(greetings("shagun"));

function HOD(loggerFun, times) {
  for (let i = 0; i < times; i++) {
    loggerFun(i);
  }
}

function loggerFun(num) {
  console.log("num is ", num);
}

HOD(loggerFun, 5);

const HOD2 = (fun1, fun2, val) => {
  const result = fun1(val);
  const result2 = fun2(result);
};

function sqrOfNum(val) {
  return val * val;
}

function logVal(val) {
  console.log("Hod 2 ", val);
}

HOD2(sqrOfNum, logVal, 4);
