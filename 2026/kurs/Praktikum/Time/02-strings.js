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
//............................................................................

console.log(name.indexOf("e"));
console.log(name.startsWith("da"));
console.log(name.startsWith("Ge"));
console.log(name.toLowerCase().startsWith("ge"));

console.log(name.endsWith("gy"));
console.log(name.repeat(2));

const password = " my rule     ";
console.log(password.trim());
console.log(password);
