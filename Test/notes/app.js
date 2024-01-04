//theory
/*
//const array = [1,2,3,4,5,58,6,13]
// const arrayString = ['a','b','c','d',null,12]
// const array =  new Array (1,2,3,4,5,12,6)
//  console.log( array[0])
//  console.log( array[array.length-1]) //7-1

//  //console.log( array[14])

//  array[0] = 'Hallo!!'
//  console.log(array)

// array[array.length] = 'Ha!!'

/*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = ["Block", "Object", 42];

function render() {
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
  }

  for (let note of notes) {
    listElement.insertAdjacentHTML("beforebegin", getNoteTemplate(note));
  }

  listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[1]));
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  listElement.insertAdjacentHTML(
    "beforeend",
    getNoteTemplate(inputElement.value)
  );
  inputElement.value = "";
};

function getNoteTemplate(title) {
  return `
        <li
            class= "list-group-item d-flex justify-content-between align-items-center"
            >
            <span> ${title}</span>
            <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
        </li>
        `;
}

/**
*Object
*/
const person = {
  firstName: `Ivanna`,
  lastName: `_`,
  year: 3722,
  languages: [`en`,`ru`,`de`,`ua`],
  getFullName: function (){
    console.log(person.firstName + ' '+ person.lastName)
  },
}
console.log()
console.log(person['languages'])
const key = 'year'
console.log(person[key])