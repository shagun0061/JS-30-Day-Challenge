// Loops

function printNumber() {
  for (let i = 1; i <= 10; i++) {
    if (i == 5) {
      continue;
    }
    if (i == 7) {
      break;
    }
    console.log(i);
  }
}

printNumber();

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num, "*", i, "=", num * i);
  }
}
printTable(5);

function sumOfNo(num) {
  let pointer = 1;
  while (pointer <= num) {
    console.log(pointer);
    pointer += 1;
  }
}

sumOfNo(10);

function sumOfNoRev(num) {
  while (num >= 1) {
    console.log(num);
    num -= 1;
  }
}

sumOfNoRev(10);

function doWhile() {
  let num = 1;
  do {
    console.log("Do while loop", num);
    num++;
  } while (num <= 5);
}
doWhile();

function factorial(num) {
  sum = num;
  do {
    sum *= num - 1;
    num--;
  } while (num !== 2);

  console.log("factorial", sum);
}
factorial(5);

function printStar(num) {
  for (let i = 0; i < num; i++) {
    let stars = "";
    for (let j = 0; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
printStar(5);
