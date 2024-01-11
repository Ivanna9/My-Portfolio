//Function Declaration
function greet (name){
    console.log('Hello -', name)
}

//Function Expression
const greet2 = function (name){
    console.log('2 Hello -', name)
}


greet('Ivanna')
greet2('Dz')

//anonim function

//setTimeout(greet,2000)

// setTimeout( function (){
//     greet('Ivanna2')
// },2000)

setInterval( function () {
         console.log(Math.random())
     },2000)