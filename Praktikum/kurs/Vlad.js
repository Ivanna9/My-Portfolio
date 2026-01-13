// let num = 42;
// let firstName = "Vlad";
// const isProgrammer = true;

// let carrot = "test";
// let $ = 7;
// // alert(firstName);
// console.log("Test:", num + 10);
// console.log("Test:", num - 10);
// console.log("Test:", num * 10);
// console.log("Test:", num / 10);

// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// console.log(num, num2);
// num2 = num2 + 1;
// console.log(num, num2);
// let num3 = (num + 10) * 5 + 65 - 32 - 12;
// console.log(num3);
// const fullName = firstName + " " + 23;
// console.log(fullName);
// console.log("Result:", resultElement);

// console.log(resultElement.textContent);
// resultElement.textContent = 54;

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const duiBtn = document.getElementById("dui");
const einBtn = document.getElementById("ein");
const zeiBtn = document.getElementById("zei");
const deiBtn = document.getElementById("dei");
const nusBtn = document.getElementById("nus");
const clearBtn = document.getElementById("clear");
let lastResult = 0;
let action = "";
// console.log(input1.value);
// console.log(input2.value);
// const sum = Number(input1.value) + Number(input2.value);
// resultElement.textContent = sum;
// // console.log(typeof sum);
//2
// plusBtn.onclick = function () {
//   const sum = Number(input1.value) + Number(input2.value);
//   resultElement.textContent = sum;
// };

// minusBtn.onclick = function () {
//   const min = Number(input1.value) - Number(input2.value);
//   resultElement.textContent = min;
// };

//3

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
duiBtn.onclick = function () {
  action = "*";
};
nusBtn.onclick = function () {
  action = "/";
};

function applyUnaryOperation(operationFunction) {
  if (lastResult === 0 || lastResult === undefined) {
    printResult("error");
    return;
  }
  const newResult = operationFunction(lastResult);
  printResult(newResult);
  lastResult = newResult;
}
einBtn.onclick = function () {
  applyUnaryOperation(function (x) {
    return 1 / x;
  });
};
zeiBtn.onclick = function () {
  applyUnaryOperation(function (x) {
    return x * x;
  });
};

deiBtn.onclick = function () {
  applyUnaryOperation(function (x) {
    return Math.cbrt(x);
  });
};
/////стрелочні
// oder einBtn.onclick = () => applyUnaryOperation(x => 1 / x);
// це те саме що function(x) { return 1 / x; }
//
// zeiBtn.onclick = () => applyUnaryOperation(x => x * x);
// deiBtn.onclick = () => applyUnaryOperation(x => Math.cbrt(x));
/////

clearBtn.onclick = function () {
  // input1.value = "";
  // input2.value = "";
  resultElement.textContent = "";
  lastResult = 0;
  action = "";
};
function printResult(result) {
  if (result > 0) {
    resultElement.style.color = "green";
  } else {
    resultElement.style.color = "red";
  }
  resultElement.textContent = result;
}

function computerNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  //1 варіант
  // if (actionSymbol === "+") {
  //   return num1 + num2;
  // } else if (actionSymbol === "-") {
  //   return num1 - num2;
  // } else if (actionSymbol === "*") {
  //   return num1 * num2;
  // } else if (actionSymbol === "/") {
  //   if (num2 === 0) return "error";
  //   return num1 / num2;
  //
  //2-й самий понятний (свіч)
  switch (actionSymbol) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) return "error";
      return num1 / num2;
    default:
      return "error";
  }
}
/*3й зі скороченням
return actionSymbol === '+' ? num1 + num2 
     : actionSymbol === '-' ? num1 - num2
     : actionSymbol === '*' ? num1 * num2
     : actionSymbol === '/' ? (num2 === 0 ? "error" : num1 / num2)
     : "Unknown operation";
*/

// } else if (actionSymbol === "1/x") {
//   if (num1 === 0) return "error";
//   return 1 / num1;
// } else if (actionSymbol === "x²") {
//   return num1 * num1;
// } else if (actionSymbol === "∛x") {
//   return Math.cbrt(num1);
//}

// submitBtn.onclick = function () {
//   if (action == "+") {
//     const sum = Number(input1.value) + Number(input2.value);
//     printResult(sum);
//     resultElement.textContent = sum;
//   } else if (action == "-") {
//     const sum = Number(input1.value) - Number(input2.value);
//     printResult(sum);
//   }
// };
submitBtn.onclick = function () {
  const result = computerNumbersWithAction(input1, input2, action);
  printResult(result);
  lastResult = result;
};
