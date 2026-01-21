const name = "Georgy";
const age = 12;
const old = "Hello my name is " + name + " " + age;
const output = `Hello my name is ${name} and my age is ${getAge() > 18 ? "Can" : "Can\'t"}`;
function getAge() {
  return age;
}
// console.log(output);
// console.log(old);

// console.log(name.length);
// console.log(name);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(4));
// console.log(name.toUpperCase());
//............................................................................
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
// ,,,,,,,,,,,,,,,,,,,,,старе и почти правильне - пошук по типам
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
// ... з типом данних , що зверху
const info1 = ["Danil", 1, "Max", 65, "Ira", 29, 32, 16, "Kathy", 71, "Fedia"];
const copy1 = [];
const people1 = [];

info1.forEach(function (info1) {
  if (typeof info1 === "string") {
    people1.push(info1);
    return true;
  }
  copy1.push(info1);
});
console.log("Array is origin:", info1);
console.log("Array of people:", people1);
console.log("Array of number:", copy1);

//.....................................нове
// const object = ["___"];
// const one = ["Tom", "Kostya", "Vlad", "Petro", "Slava", "Irina"];
// const two = ["___"];
// one.forEach(function (one) {
//   const newArr = one.concat(two);
//   console.log("Array:", newArr);
//   const ed = two + newArr + two;
//   console.log(ed);
//   console.log("Array of new231q23:", newArr);
// });

// one.forEach(function (one) {
//   const joined = one.join(two);
//   console.log("Array:", joined);
// });
//.......................
const one = ["Tom", "Kostya", "Vlad", "Petro", "Slava", "Irina"];
const two = "___";
const joined = two + one + two;
console.log(joined);
//.........................
const array = ["Tom", "Kostya", "Vlad", "Petro", "Slava", "Irina"];
const object = ["___"];
// const newArr = [];

var newArr = array.join("___");
//
// console.log(array.fill("___"));

array.forEach(function (array) {
  const newArr = array.concat(object);
  console.log("Array:", newArr);
});
console.log("Array of new:", newArr);

function add(array, object) {
  const sum = object + array + object;
  reduce(sum, add);
}
console.log("Array is origin:", array);
// console.log("Array of object:", object);

function proba() {
  let arr = ["Tom", "Kostya", "Vlad", "Petro", "Slava", "Irina"];
  for (let arr of str) {
    str = arr.join("___");
  }
  console.log(str);
}
