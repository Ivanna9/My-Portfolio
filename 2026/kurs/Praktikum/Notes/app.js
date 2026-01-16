//theory
// const array = [1, 4, 8, 12, 19, 41];
// console.log(array);

// const arrayStrings = ["a", "b", "c", null, 12];
// console.log(arrayStrings);

// const array = new Array(1, 2, 4, 5, 33, 21);
// console.log(array);
//console.log(array.length);
// console.log(array[10]);
// console.log(array[array.length - 1]);
// array[0] = "hi";
// console.log(array);

// const inputElement = document.getElementById("title");
// const createBtn = document.getElementById("create");
// const listElement = document.getElementById("list");

//erste mal const notes
// const notes = ["записать блок про масиви", "розказати теорію обєктів"];
// function render() {
//    for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
//   }
// }

// createBtn.onclick = function () {
//   if (inputElement.value.length === 0) {
//     return;
//   }
//   listElement.insertAdjacentHTML(
//     "beforeend",
//     getNoteTemplate(inputElement.value)
//   );
//   inputElement.value = "";
// };

// function getNoteTemplate(title) {
//   return `
//  <li class="list-group-item d-flex justify-content-between align-items-center">
//       <span class="note-title">${title}</span>
//       <span class="d-flex gap-2">
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//       </span>
//     </li>
//  `;
// }

/*//object

const person = {
  firstName: "Maria",
  lastName: "Minin",
  year: 2003,
  hasBoyFriend: false,
  languages: ["ua", "de", "en", "ru"],
  getFullName: function () {
    console.log(person.firstName + " " + person.lastName);
  },
};
console.log(person.year);
console.log(person["languages"]);
const key = "hasBoyFriend";
console.log(person[key]);
person.getFullName();
*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "записать блок про масиви",
    completed: false,
  },
  {
    title: "розказати теорію обєктів",
    completed: true,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) {
    listElement.innerHTML = "<p> No element </p>";
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  const newNote = {
    title: inputElement.value,
    completed: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      notes[index].completed = !notes[index].completed;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
    render();
  }
};

function getNoteTemplate(note, index) {
  return `
 <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="${note.completed ? "text-decoration-line-through" : ""}">${
    note.title
  }</span>
      <span>
        <span class="btn btn-small btn-${
          note.completed ? "warning" : "success"
        }" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger" data-type="remove" data-index ="${index}">&times;</span>
      </span>
    </li>
 `;
}
