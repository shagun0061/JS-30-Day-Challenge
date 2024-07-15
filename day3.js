function checkNumber(num) {
  if (num === 0) {
    return "number is zero";
  } else if (num > 0) {
    return "number is positive";
  } else if (num < 0) {
    return "number is negative";
  }
}

console.log(checkNumber(0));
console.log(checkNumber(-1));
console.log(checkNumber(7));

function checkEligibilty(age) {
  if (age >= 18) {
    return "Person is eligible to vote ";
  } else {
    return "Person ios not eligible to vote";
  }
}

console.log(checkEligibilty(22));
console.log(checkEligibilty(16));

function LargerNum(a, b, c) {
  let larger = 0;
  if (a > b && a > c) {
    return a;
  } else if (b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(LargerNum(1, 4, 2));

function DayOfWeek(day) {
  switch (day) {
    case 1:
      console.log("Sunday");
      break;

    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;

    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("thuesday");
      break;
    case 6:
      console.log("friday");
      break;
    case 7:
      console.log("saturday");
      break;
  }
}

DayOfWeek(4);

function grades(g) {
  switch (g) {
    case "A":
      console.log("A");
    case "B":
      console.log("B");
    case "C":
      console.log("C");
  }
}

grades("C");

function checkOddEven(num) {
  num % 2 === 0 ? console.log(num, "is Even") : console.log(num, "is Odd");
}

checkOddEven(3);

function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year, "is Leap year");
  } else {
    console.log(year, "is not a Leap year");
  }
}
checkLeapYear(2024);
