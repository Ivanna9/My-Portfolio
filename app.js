// let num = 45
// let firstName = 'Vanna'
// num = 69
// const isProgrammer = true 
// firstName = 'Baloc'

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
const input1 = document.getElementById ('input1')
const input2 = document.getElementById ('input2')
const submitBtn= document.getElementById ('submit')
const plusBtn= document.getElementById ('plus')
const minustBtn= document.getElementById ('minus')

plusBtn.onclick = function () {
    action = '+'
    
    }

minustBtn.onclick = function () {
    action = '-'
      
    }

    function printResult (result) {
            if (result<0) {
                resultElement.style.color = "red"
            } else {
                resultElement.style.color = "green"
            }
             resultElement.textContent = result
    }

    function computerNumbersWithAction (inp1,inp2,inp3,inp4, actionSymbol){
        const num1 = Number (inp1.value)
        const num2 = Number (inp2.value)
        const num3 = Number (inp3.value)
        const num4 = Number (inp4.value)

        if ( actionSymbol == '+'){
            return num1 + num2
        } else if ( actionSymbol == '-'){
            return num1 - num2
        } else if ( actionSymbol == '*'){
        return num1 * num2
        }else if ( actionSymbol == '/'){
        return num1 / num2
    } 
    }
submitBtn.onclick = function() {
    const result = computerNumbersWithAction (input1,input2,input3,input4,action)
    printResult(result)
}
    
// submitBtn.onclick = function () {
//     if (action == '+') {
//         const sum= Number(input1.value) + Number(input2.value)
//         printResult (sum)
//          }
//          else if (action == '-') {
//         const sum= Number(input1.value) - Number(input2.value)
//         printResult (sum)
//          }
// }
