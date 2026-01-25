//--------------function declaration----------------
function greet() {
  console.log("Hello -", name);
}
// -----------function expression--------------
const greet2 = function greet() {
  console.log("2 Hello -", name);
};
greet("Andrei");
greet2("Abra");

console.log(typeof greet);
console.dir(greet);

let counter = 0;
const interval = setInterval(function () {
  if (counter === 5) {
    clearInterval(interval);
  } else {
    console.log(++counter);
  }
}, 1400);
setTimeout(function () {
  console.log(1);
}, 1400);

// setInterval(function () {
//   console.log(Math.random());
// }, 1400);
//--------------arrow functions-------------------

function greet(name) {
  console.log("Hello -", name);
}

const arrow = (name, age) => {
  console.log("Hello -", name, age);
};

const arrow2 = (name) => {
  console.log("Hello -", name);
};
arrow2("Johhan", 11);

function pow(num, exp) {
  return Math.pow(num, exp);
}

const pow2 = (num, exp) => {
  return Math.pow(num, exp);
};
console.log(pow(2, 3));
// -------default parametrs---------------
const sum = (a, b = 8) => a + b;
console.log(sum(62, 3));
console.log(sum(6));

function sumAll(...numbers) {
  let res = 0;
  for (let num of numbers) {
    res += num;
  }
  return res;
}
console.log(sumAll(1, 4, 6, 7, 3));

function sumAll1(...numbers) {
  return numbers.reduce((acc, cur) => (acc += cur), 0);
}
console.log(sumAll1(6, 2, 3, 1, 4));

//closures////
function createPerson(namePerson) {
  return function (lastName) {
    console.log(namePerson + " " + lastName);
  };
}
const addLastName = createPerson("Gorvardino");
addLastName("Abdurilo");
