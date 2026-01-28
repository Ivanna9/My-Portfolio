console.log("test");

const person = {
  name: "Jorje",
  age: "23",
  isYoutuber: true,
  hasGirlfriend: false,
  languages: ["en", "de"],
  address: {
    city: "Berlin",
    street: "Garten",
    house: "5",
  },
  "complex key": "complex",
  [new Date().getTime()]: "computed value",
  greet() {
    console.log("Greet from person", this);
  },
  arrow: () => {
    console.log("Person Arrow", this);
  },
  info() {
    console.log("Person name", this.name);
  },
};
console.log("----------------------------------");
console.log(person);
person.info();

person.age++;
person.languages.push("ua");
console.log(person.languages);

delete person.address;

// destructoring
// const age = person.age;
// const name = person.name;
// const languages = person.languages;

const { age, name: firstName = "test", languages } = person;
console.log("----------------------------------");

console.log(languages, age, firstName);
//error
// for (let key in person) {
//   //   console.log(key);
//   console.log(person[key]);
// }

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(person[key]);
  }
}
// console.log([1.2]);
console.log("----------------------------------");

// console.dir(Object);
const keys = Object.keys(person);
console.log(keys);

keys.forEach((key) => {
  console.log(person[key]);
});
console.log("----------------------------------");

const logger = {
  keys(obj) {
    console.log("Object keys", Object.keys(obj));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log("Key:", key);
      console.log("Value", this[key]);
    });
  },
};

logger.keys(person);
console.log("----------------------------------");

const logger1 = {
  keys() {
    console.log("Object keys", Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log("Key:", key);
      console.log("Value", this[key]);
    });
  },
};

const bound = logger1.keys.bind(person);
bound();
console.log("----------------------------------");

const logger3 = {
  keys(withText = true) {
    if (withText) {
      console.log("Object keys", Object.keys(this));
    } else {
      console.log(Object.keys(this));
    }
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log("Key:", key);
      console.log("Value", this[key]);
    });
  },
};
logger3.keys.call(person, false);
console.log("----------------------------------");

logger3.keys.apply(person);
console.log("----------------------------------");

class Human {
  static isHuman = true;
  humanGreet() {
    console.log("greet from human");
  }
}
class Person extends Human {
  constructor(name, surname, age) {
    super();
    this.name = name ?? "Undefined name";
    this.surname = surname ?? "Undefined surname";
    this.age = age ?? "Undefined age";
  }

  sayHello() {
    console.log("Hello from", this.name);
  }
}

const newPerson1 = new Person("Krokodilo", "Bombardillo", 25);
const newPerson2 = new Person("Fichukatta", "Harvidillo", 43);
newPerson1.sayHello();
console.log("----------------------------------");
newPerson2.sayHello();
console.log("----------------------------------");
console.log(Human.isHuman);
