const num = 54;
const float = 12.76;
const pow = 5;
const big = 1_000_000;
console.dir(Number);
console.log(Math.pow(4, 21) - 7);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.isFinite(Infinity));
// console.log(Number.);
const weird = 55 / undefined;
console.log(Number.isNaN(weird));
console.log(Number.isNaN(43));

const strInt = "74";
const strFloat = "32.97";
// console.log(Number(strInt));
// console.log(Number(strFloat));

// console.log(parseInt(strInt));
// console.log(parseFloat(strFloat));

console.log(+strInt, +strFloat);
console.log((0.2 + 0.1).toFixed(6));

//bigint
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n);
console.log(-42n);
// console.log(43.54n);//error
// console.log(10n-4);//error
console.log(parseInt(14n) - 5);
console.log(43n - BigInt(6));
console.log(5n - 7n);

const myNum = 6.7;
// Math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.sqrt(43));
console.log(Math.pow(5, 6));
console.log(Math.max(5, 6, 1, 242, 1, 34, 87));
console.log(Math.min(5, 6, 1, 242, 1, 34, 87));
console.log(Math.floor(myNum));
console.log(Math.ceil(myNum));
console.log(Math.round(myNum));
console.log(Math.trunc(myNum));
console.log(Math.random());

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const num7 = getRandomNumber(10, 100);
console.log(num7);
