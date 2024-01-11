//Function Declaration
// function greet (name){
//     console.log('Hello -', name)
// }

// //Function Expression
// const greet2 = function (name){
//     console.log('2 Hello -', name)
// }


// greet('Ivanna')
// greet2('Dz')

//anonim function

//setTimeout(greet,2000)

// setTimeout( function (){
//     greet('Ivanna2')
// },2000)

// let counter = 0 
// const interval = setInterval( function () {
//     if (counter === 5){
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// arrow functions
// function greet (name) {
//     console.log ('Hallo -' , name)
// }

const arrow = (name,age) => {
    console.log ('Hallo meine liebe -' , name, age)
}

const arrow2 = (name) =>  console.log ('Hallo meine liebe -' , name)

function pow (num,exp) {
    return  Math.pow (num,exp)
}

//const pow2 = (num, exp) => Math.pow (num,exp)
//console.log (pow(2,3))

// Default parameters
const sum = (a =29,b= a/2) => a+b
//console.log(sum(20,4))
console.log(sum())

function sumAll(...numbers)
{
    // let res =0
    // for (let num of numbers){
    //     res += num
    // }
    // return res
    return numbers.reduce((acc,cur) => (acc+= cur),0)
}

console.log(sumAll(1,2,1))

//Closures
