const names = ["Glusio", "Kellay", "Toppo", "Wanuly", "Yalisa"];
names.push("Glusio");
names.unshift("Glusio");

const firstName = names.shift();
const firstName1 = names.pop();
console.log("Names: ", names, firstName);

console.log(names.reverse());
console.log(names.toReversed());
console.log(names);

const letters = ["e", "h", "g", "l", "a"];
console.log(letters.sort());
console.log(letters.pop());
console.log(letters.toSorted());
console.log(letters);

// console.log(names.splice(2,4));
console.log(names.toSpliced(0, 2));
console.log(names);

const greateWoman = "Yalisa";
const index = names.indexOf(greateWoman);
// console.log(index);
// console.log(names[index])
// console.log(names)
const newNames = names.with(index, "Yalisa Jonnare");
// console.log(names);
console.log(newNames);

const capitalNames = names.map(function (name, index) {
  const newName = name + "!";
  return name.toUpperCase();
  return name.toLowerCase();
  if (index === 1) {
    return "Yalisa Jonnare";
  }
  return name;
});
console.log(capitalNames);

console.log(names.includes("Toppo"));
console.log(names.indexOf("Toppo") !== -1);

const people = [
  { name: "Vallia", budget: 5000 },
  { name: "Jonny", budget: 1200 },
  { name: "Bao", budget: 3800 },
  { name: "Felicio", budget: 4000 },
  { name: "Welra", budget: 1700 },
  { name: "Nara", budget: 2900 },
];

// let findedPerson;

for (let person of people) {
  if (person.budget === 1700) {
    findedPerson = person;
  }
}

const findedPerson = people.find(function (person) {
  return person.budget === 1200;
  //   if (person.budget === 1200) {
  //     return true;
  //   }
});
console.log(findedPerson);

const finded = people.find((p) => p.budget === 5000);
console.log(finded);

const finded1 = people.findIndex(function (person) {
  return person.budget === 1200;
});
console.log(people.with(finded1, 4200));

let sumBudget = 0;
const filtered = people.filter(function (p) {
  return p.budget > 3000;
});
console.log(filtered);

filtered.forEach(function (p) {
  sumBudget += p.budget;
});

console.log(sumBudget);

1;
const sumBudget3 = people
  .filter((p) => p.budget > 3000)
  .map((p) => p.budget)
  .reduce((acc, p) => acc + p, 0);
console.log(sumBudget3);
2;

const byBudget = (p) => p.budget > 3000;
const pickBudget = (p) => p.budget;

const sumBudget1 = people
  .filter(byBudget)
  .map(pickBudget)
  .reduce((acc, p) => acc + p, 0);
console.log(sumBudget1);

const string = "Hello";
const reversed = string
  .split("")
  .toReversed()
  .join("!")
  .split("")
  .filter((c) => c !== "!")
  .join("");
console.log(reversed);
