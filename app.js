let num = 45
let firstName = 'Vanna'
num = 69
const isProgrammer = true 
firstName = 'Baloc'

// alert (firstName)
// console.log('TEST',firstName)
// console.log( num+ 10)
// console.log( num * 10)
// console.log( num- 10)
// console.log( num/ 10)

// let num2 = num + 10
// console.log( num,num2)

// num = num2 - num
// console.log( num,num2)

// let num3 = (num +15) *3/2 -4
// console.log(num3) 

// const fullName = firstName+ ' graa'
// console.log( fullName)

const resultElement = document.getElementById ('result')
console.log (resultElement.textContent)
// resultElement.textContent = (42-2)/ num 

const input1 = document.getElementById ('input1')
const input2 = document.getElementById ('input2')
console.log(input1.value)


const sum= Number(input1.value)+ Number(input2.value)
resultElement.textContent =sum

//console.log(typeof sum)

