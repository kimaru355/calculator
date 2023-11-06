let input = document.querySelector("#input");
let output = document.querySelector("#output");
let number1;
let number2;
let result;
let equation = "";
let operator = "";
let fullNumber = "";

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator(button.id);
  });
});

let calculator = (buttonId) => {
  if (buttonId === "C") {
    operator = "";
    equation = "";
    output.textContent = "";
  } else if (buttonId === "=") {
    number2 = parseInt(fullNumber);
    fullNumber = "";
    calculate();
    if (isNaN(result)) {
      result = "ERROR";
    }
    output.textContent = result;
  } else {
    equation += buttonId;
    switch (buttonId) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        // +
        if (operator === "") {
          number1 = parseInt(fullNumber);
          fullNumber = "";
          operator = buttonId;
        } else {
          result = calculate();
          if (isNaN(result)) {
            result = "ERROR";
          }
          output.textContent = result;
        }
        break;
      default:
        // 34
        // 36
        fullNumber += buttonId;
        break;
    }
  }
  input.textContent = equation;
};

function sortPriority() {
  equation = Array.from(equation);
}

function calculate() {
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      if (operands[counter + 1] == 0) {
        calculated = "ERROR";
        return;
      }
      result = number1 / number2;
      break;
    case "%":
      result = number1 % number2;
      break;
  }
}
