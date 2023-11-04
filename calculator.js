function calculator(equation) {
  let numbers = [];
  let operators = [];
  let number = "";
  let fullNumber;
  Array.from(equation).filter((char) => {
    if (!isNaN(parseInt(char))) {
      number += char;
    }
    switch (char) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        operators.push(char);
        fullNumber = parseInt(number);
        number = "";
        numbers.push(fullNumber);
        break;
      case "=":
        fullNumber = parseInt(number);
        numbers.push(fullNumber);
        break;
    }
  });
  let calculated = numbers[0];
  let counter = 0;
  operators.forEach((operator) => {
    switch (operator) {
      case "+":
        calculated += numbers[counter + 1];
        counter += 1;
        break;
      case "-":
        calculated -= numbers[counter + 1];
        counter += 1;
        break;
      case "*":
        calculated *= numbers[counter + 1];
        counter += 1;
        break;
      case "/":
        if (numbers[counter + 1] == 0) {
          calculated = "ERROR";
          return;
        }
        calculated /= numbers[counter + 1];
        counter += 1;
        break;
      case "%":
        calculated %= numbers[counter + 1];
        counter += 1;
        break;
    }
  });
  console.log(numbers, operators, calculated);
  return calculated;
}

module.exports = calculator;
