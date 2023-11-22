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

const inputElement = document.getElementById ('title')
const createBtn = document.getElementById ('create')
const listElement = document.getElementById ('list')

console.log(inputElement.value)

createBtn.onclick=function () {
    listElement.innerHTML= 
    `
        <li
            class= "list-group-item d-flex justify-content-between align-items-center"
            >
            <span> Name</span>
            <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
            </span>
         </li>
    `
}