const name = "Georgy";
const age = 12;
const old = "Hello my name is " + name + " " + age;
const output = `Hello my name is ${name} and my age is ${getAge() > 18 ? "Can" : "Can\'t"}`;
function getAge() {
  return age;
}
console.log(output);
console.log(old);

console.log(name.length);
console.log(name);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(4));
console.log(name.toUpperCase());

// const array = ["Tom", "Kostya", "Vlad", "Petro", "Slava", "Irina"];
// console.log(array);
// // let padded = array.padStart(3, "a"), array.padEnd(3, "a");
// // console.log(padded);

// console.log(array.push("awd"));
// console.log(array.unshift("awd"));
// console.log(array);
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// const myArr = ["Danil", 1, "Max", 65, "Ira", 29, 32, 16, "Kathy", 71, "Fedia"];
// myArr.sort();
// console.log(myArr);

// console.log(myArr.slice(6));
// console.log(myArr.slice(0, 6));
// // const newArr = [],
/////,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//   result = [],
//   length = 6;
// for (let x = 0; x <= 11; x++) newArr.push(x);
// while (myArr.length) result.push(newArr.splice(0, length));
// console.log(newArr);

// if (myArr === Number) {
//   newArr += myArr;
// } else {
//   const oldArr = 0;
//   oldArr += myArr;
// }

// for (let num = 0; num < myArr.length; num++) {
//   if (myArr >= 0) {
//     newArr += myArr;
//     console.log(newArr);
//   }
// }
// return (oldArr += myArr);
// ,,,,,,,,,,,,,,,,,,,,,
const info = ["Danil", 1, "Max", 65, "Ira", 29, 32, 16, "Kathy", 71, "Fedia"];
const copy = [];
const people = [];

info.forEach(function (info) {
  if (info >= 0) {
    copy.push(info);
    return true;
  }
  people.push(info);
});
console.log("Array is origin:", info);
console.log("Array of people:", people);
console.log("Array of number:", copy);

//.......................
const array = ["Tom", "Kostya", "Vlad", "Petro", "Slava", "Irina"];
// let result = arr.find(function (item, index, array) {});
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);

//.......................

// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);
// ,,,,,,,,,,,,,,,,,,,,,,,,

// Давай от тобі задача, зроби масив рядків якихось імен, потім пройдися по ньому і добав спереді і зкінця по 3 символи _
// Не вкінець і початок масива, а до кожного рядка в середині масива
// Також почитай про map, filter, reduce
