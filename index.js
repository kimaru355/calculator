let input = document.querySelector("#input");
let output = document.querySelector("#output");
let toCalculate = [];
let calculating;
let calculated;

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator(button.id);
  });
});

let calculator = (buttonId) => {
  if (buttonId === "C") {
    input.textContent = "";
    output.textContent = "";
    return;
  } else if (buttonId === "=") {
    output.textContent = calculating;
  } else {
    //toCalculate.
    switch (buttonId) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        calculating = toCalculate.reduce((fullNum, num) => (fullNum += num));
        toCalculate = [];
        break;
      default:
        toCalculate.push(buttonId);
        break;
    }
  }
  input.textContent += buttonId;
  output.textContent += calculating;
};
