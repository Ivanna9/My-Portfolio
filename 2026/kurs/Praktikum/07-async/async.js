// const timeout = setTimeout(() => {
//   console.log("after 2 seconds");
// }, 2000);

// clearTimeout(timeout);

// setTimeout(() => {
//   console.log("after3 seconds");
// }, 3000);

// setInterval(() => {
//   console.log("tick", ++count);
// }, 1000);

// function delay(callback, time = 1000) {
//   setTimeout(callback, time);
// }
// delay(() => {
//   console.log("timeout");
// }, 2000);

const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
  return promise;
};

delay(2500).then(() => {
  console.log("timeout");
});

const delay1 = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 3, 6, 2]);
    }, time);
  });
  return promise;
};

delay1(2500)
  .then((data) => {
    console.log("timeout", data);
    return data.map((x) => x ** 2);
  })
  .then((data) => {
    console.log(data);
  });
