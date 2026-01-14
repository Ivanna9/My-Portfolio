// hello.ts
function greet() {
  function summary(a, b) {
    return a + b;
  }
  function minus(a, b) {
    return a - b;
  }
  return { summary, minus };
}
var object = greet();
console.log(typeof object);
console.log(object);
console.log(object.summary(9, 5));
console.log(object.minus(9, 5));
