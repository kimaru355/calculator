let input = document.querySelector("#input");
let output = document.querySelector("#output");
let number1;
let number2;
let result = "";
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
    result = "";
    fullNumber = "";
    output.textContent = "";
  } else if (buttonId === "=") {
    if (fullNumber === "") {
      return;
    }
    number2 = parseInt(fullNumber);
    fullNumber = "";
    calculate();
    output.textContent = result;
    if (result === "ERROR") {
      operator = "";
      equation = "";
      result = "";
    }
  } else {
    switch (buttonId) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        if (equation === "") {
          return;
        }
        if (operator !== "" && fullNumber === "") {
          return;
        }
        if (operator === "") {
          number1 = parseInt(fullNumber);
          fullNumber = "";
          operator = buttonId;
        } else {
          if (result === "") {
            number2 = parseInt(fullNumber);
            fullNumber = "";
            calculate();
            output.textContent = result;
            if (result === "ERROR") {
              operator = "";
              equation = "";
            } else {
              equation = "";
              equation += result;
              operator = buttonId;
              number1 = result;
              result = "";
            }
          } else {
            number1 = result;
            operator = buttonId;
            equation = "";
            equation += result;
            result = "";
          }
        }
        break;
      default:
        fullNumber += buttonId;
        break;
    }
  }
  if (buttonId !== "=" && buttonId !== "C") {
    equation += buttonId;
  }
  input.textContent = equation;
};

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
      if (number2 == 0) {
        result = "ERROR";
        return;
      } else {
        result = number1 / number2;
      }
      break;
    case "%":
      result = number1 % number2;
      break;
  }
}
