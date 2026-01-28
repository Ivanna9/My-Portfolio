const timeout = setTimeout(() => {
  console.log("after 2 seconds");
}, 2000);

clearTimeout(timeout);

setTimeout(() => {
  console.log("after3 seconds");
}, 3000);
