// const car = {
//   modeL: "Tesla",
//   year: 2014,
// };
// const json = JSON.stringify(car);
// const parsed = JSON.parse(json);

// console.log(car);
// console.log(json);

const list = document.querySelector("#list");
const filter = document.querySelector("#filter");
filter.addEventListener("input", (event) => {
  console.log("input", event.target.value);
});

async function start() {
  list.style.color = "green";
  list.innerHTML = "Loading... ";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setTimeout(() => {
      render(data);
    }, 2000);
  } catch (err) {
    list.style.color = "red";
    list.innerHTML = err.message;
  }
}
function render(user = []) {
  const html = user.map(toHTML).join("");
  list.innerHTML = html;
}

function toHTML(user) {
  return ` <li class="list-group-item">${user.name}</li>
    `;
}
start();
