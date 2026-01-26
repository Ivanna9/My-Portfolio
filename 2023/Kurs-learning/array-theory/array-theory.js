const names = ["Tom", "Lime", "Sam", "Lukas"];

names.push("Lime");
console.log("Names:", names, name);

const name1 = name1.shift();
const name = name.pop();

console.log(names.reverse());
const reversed1 = names.toReversed();

const letters = ["s", "r", "g", "w", "f"];
console.log(
  letters.sort(function (a, b) {
    return a - b;
  }),
);
console.log(letters);

console.log(names.splice(1, 2));
console.log(names.toSpliced(1, 2));
console.log(names);

const greatMan = "Sam";
const index = names.indexOf(greatMan);
console.log(index);
console.log(names[index]);
const newNames = names.with(index, "Sam Willons");
console.log(names);
console.log(newNames);

const capitalNames1 = names.map(function (name) {
  return name.toUpperCase();
});
console.log(capitalNames1);

const capitalNames = names.map(function (name, index) {
  if (index === 0) {
    return "Sam Willons";
  }
  return name;
});
console.log(capitalNames);

console.log(names.includes("Tom"));

const people = [
  { name: "Salla", budget: 5000 },
  { name: "Tommy", budget: 1000 },
  { name: "Beral", budget: 560 },
  { name: "Mysma", budget: 1200 },
  { name: "Nula", budget: 9200 },
  { name: "Enisha", budget: 2200 },
  { name: "Kutor", budget: 200 },
];
//1 variant
let findedPerson1;
for (let person of people) {
  if (person.budget === 2000) {
    findedPerson1 = person;
  }
}
console.log(findedPerson1);

//2 variant

const findedPerson2 = people.find(function (person) {
  if (person.budget === 1200) {
    return true;
  }
});

console.log(findedPerson2);

// 3 variant

const findedPerson = people.find(function (person) {
  return person.budget === 1200;
});
console.log(findedPerson);

//4 variant
const finded = people.find((p) => p.budget === 1200);
console.log(finded);

const filtered1 = people.filter(function (p) {
  return p.budget >= 2000;
});
console.log(filtered1);

// 1 variant
let sumBudget1 = 0;
const filtered = people.filter(function (p) {
  return p.budget >= 2000;
});
console.log(filtered);
filtered.forEach(function (p) {
  sumBudget1 = sumBudget1 + p.budget;
});
console.log(sumBudget1);

//2 variant
const sumBudget2 = people
  .filter((p) => p.budget > 3000)
  .map((p) => p.budget)
  .reduce((acc, p) => acc + p, 0);

console.log(sumBudget2);

//2.1 variant
const byBudget = (p) => p.budget > 5000;
const pickBudget = (p) => p.budget;
const sumBudget = people
  .filter(byBudget)
  .map(pickBudget)
  .reduce((acc, p) => acc + p, 0);

console.log(sumBudget);

const string = "Hallo meine liebe";

const reversed = string.split("").toReversed().join("");
console.log(reversed);
