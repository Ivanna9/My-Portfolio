//operator

// let a = 1;
// let b = 2;
// let c = 3;

// // c = c + a;
// // c = c - a;
// // c = c * a;
// // c = c / a;

// // oder
// // c += a;
// // c -= a;
// // c *= a;
// // c /= a;

// //ctepen
// // c = 4 ** 2;
// //======= data types
// const age = 12;
// const name = "Hadoel"; //string
// const isProgrammer = true; //boolean
// let x; //undefined
// // console.log(typeof x);
// // //null
// // console.log(typeof null); //object

// // console.log(typeof (1 / x)); //number ?
// // console.log(typeof NaN); //number

// ///Priority
// const fullAge = 7;
// const birthYear = 1999;
// const currentYear = 2005;
// // // ><
// // const isFullAge = currentYear - birthYear <= fullAge;
// // console.log(isFullAge);

// const num1 = 2;
// const num2 = "2";
// console.log(num1 == num2); //true

// const num3 = 2;
// const num4 = "2";
// console.log(num3 === num4); //false

// //методи з масивами
// let arr = [1, 2, 3];
// console.log(arr);
// // Додати в КІНЕЦЬ:
// arr.push(4); // [1, 2, 3, 4]
// console.log(arr);
// // Додати на ПОЧАТОК:
// arr.unshift(0); // [0, 1, 2, 3, 4]
// console.log(arr);
// // Видалити ОСТАННІЙ елемент:
// arr.pop(); // [0, 1, 2, 3]
// console.log(arr);
// // Видалити ПЕРШИЙ елемент:
// arr.shift(); // [1, 2, 3]
// console.log(arr);
// // Видалити за ІНДЕКСОМ:
// arr.splice(1, 1); // видаляє 1 елемент з індексу 1
// // [1, 3]
// console.log(arr);

///xyina
// const arr1 = [1, 2, 3];
// console.log("1:", arr1);
// const arr2 = arr1; // arr2 НЕ копія! Це ПОСИЛАННЯ на той самий масив!
// console.log("2:", arr1);
// console.log(arr2);
// arr2.push(4);
// console.log("3:", arr1); // [1, 2, 3, 4] ← змінився!
// console.log(arr2);
