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
const peoplea = [];

info.forEach(function (info) {
  if (info >= 0) {
    copy.push(info);
    return true;
  }
  peoplea.push(info);
});
console.log("Array is origin:", info);
console.log("Array of people:", peoplea);
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
//6
let allMan;
allMan = [];
const allWom = [];
const oldArr = [];
const alt27 = [];
// const sortI = [];
const people = [
  {
    id: 1,
    name: "Олексій",
    age: 28,
    gender: "чоловік",
  },
  {
    id: 2,
    name: "Марія",
    age: 24,
    gender: "жінка",
  },
  {
    id: 3,
    name: "Іван",
    age: 32,
    gender: "чоловік",
  },
  {
    id: 4,
    name: "Анна",
    age: 27,
    gender: "жінка",
  },
  {
    id: 5,
    name: "Дмитро",
    age: 30,
    gender: "чоловік",
  },
];
// x
// people.forEach(function (human) {
//   if (human.gender === "чоловік") {
//     allMan.push(human);
//   }
//   if (human.gender === "жінка") {
//     allWom.push(human);
//   }
// });

const result = people.filter(function (human) {
  return human.gender === "чоловік";
});
const result1 = people.filter(function (human) {
  return human.gender === "жінка";
});

console.log("=== Перша задача ===");
console.log("Чоловіки:", result);
console.log("Жінки:", result1);

const ung = [];
people.forEach(function (human) {
  if (human.age >= 27) {
    alt27.push(human);
  }
  if (human.age < 27) {
    ung.push(human);
  }
});
console.log("=== Друга задача ===");
console.log("Всі кому за 27:", alt27);
console.log("Залишок:", ung);

people.sort(function (human1, human2) {
  if (human1.age > human2.age) return 1;
  if (human1.age == human2.age) return 0;
  if (human1.age < human2.age) return -1;
});

console.log("=== Третя задача ===");
console.log("Сортування по віку:", people);
// x1
// const all = [];

// people.forEach(function (human) {
//   if (human.name == "і") {
//     sortI.push(human);
//   }
//   all.push(human);
// });

// x2

// let target = "і";
// let pos = 0;
// while (true) {
//   let foundPos = people.name;
//   foundPos.indexOf(target, pos);
//   if (foundPos == -1) break;

//   console.log(`Знайдено тут: ${foundPos}`);
//   pos = foundPos + 1;
// }

// // x3

// let target1 = "і";
// console.log(people.includes(target1));
// // x
// let pos1 = -1;
// while ((pos1 = people.indexOf(target1, pos1 + 1)) != -1) {
//   console.log(pos1);
// }
// // x4

const sortedByNameLocale = people.sort((human1, human2) =>
  human1.name.localeCompare(human2.name, "ua"),
);
console.log("=== Сортування по алфавіту ===");
console.log("sortedByNameAlb:", sortedByNameLocale);

// x5

// const pattern = "н";
// const matches = people.match(pattern);
// console.log("match:", matches);

// //x6
// const result45 = people.filter(function (human) {
//   return human.name === "І";
// });
// console.log("result:", result45);
// //x7
// const sortedByName = people.sort(function (human1, human2) {
//   if (human1.name > human2.name) return 1;
//   // if (human1.name == human2.name) return 0;
//   if (human1.name < human2.name) return -1;
// });
// console.log("Fk:", sortedByName);
// //x8

// people.sort((name1, name2) => {
//   console.log("as:", people);
//x
//   if (name1.name < name2.name) return -1;
//   if (name1.name > name2.name) return 1;
//   return 0;
// });

//x9

// people.forEach(function (human) {
//   let sortI = human.name;
//   sortI.filter((sortI) => sortI.includes("і"));
// });

//x10
// const sortI = people.filter(function (human) {
//   return human.name === "і";
// });
console.log("=== Четверта задача ===");
// console.log("Усі у кого є і в імї:", sortI);
// console.log("Залишок:", all);

//х11
// people.forEach(function (human) {
//   let x11 = human.name;
//   console.log("Залишок:", x11);
//   console.log(x11.indexOf("і"));
// });
//х12
// people.forEach(function (human) {
//   let x11 = human.name;
//   let pos = 0;

//   console.log("Імя:", x11);
//   // console.log(x11.indexOf("і"));
//   if ((x11 = x11.indexOf("і"))) {
//     return console.log(x11);
//   } else {
//     return console.log("Залишок:", all);
//   }
// });
//х13
people.forEach(function (human) {
  let x11 = human.name;
  let pos = 0;
  let target = "і";
  while (true) {
    let foundPos = x11.indexOf(target, pos);
    if (foundPos == -1) break;
    console.log(`Позиція букви і в імені: ${foundPos}, в ім'ї:" ${x11}`);
    pos = foundPos + 1;
    console.log("Саме імя:", x11);
  }
});
//x14
const filteringByName = people.filter(function (human) {
  if (human.name.indexOf("i") > 0) {
    return 1;
  } else if (human.name.indexOf("i") < 0) {
    return -1;
  } else if (human.name.indexOf("i") == 0) {
    return 0;
  }
});
console.log("Сортування по іменам попитка 14:", filteringByName);

//x15
const filterName = [];
const filterByName = people.sort(function (human) {
  if (human.name.indexOf("i") > 0) {
    filterByName.push(human);
    return 1;
  } else {
    filterName.push(human);
    return 0;
  }
});
console.log("Сортування по іменам попитка 15:", filterByName);
console.log("Сортування по іменам попитка 15:", filterName);

//x16
const filterName1 = [];
const filterByName1 = people.sort(function (human) {
  if (human.name.indexOf("i") > 0) {
    filterByName1.push(human);
    return 1;
  } else if (human.name.indexOf("i") == 0) {
    filterName1.push(human);
    return 0;
  } else if (human.name.indexOf("i") < 0) {
    filterName1.push(human);
    return -1;
  }
});
console.log("Сортування по іменам попитка 16:", filterByName1);
console.log("Сортування по іменам попитка 16:", filterName1);

// // четверта задача, відфільруй людей в імені яких є буква "і"
// If(human.name.indexOf("i")>0) - і якщо там є ця літера то покаже індекс більше 0,
//  отже там ця літера є, а якщо буде -1, що менше 0 то там цієї літери немає
