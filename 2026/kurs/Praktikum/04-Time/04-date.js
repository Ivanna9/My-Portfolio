const now = new Date();
const start = new Date(1000 * 60);
const date = new Date(2002, 3, 2, 12, 65, 12);

console.log(date);

console.log(now.getDate());
console.log(now.getMinutes());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
