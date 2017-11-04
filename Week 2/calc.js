/*
 * Implement all your JavaScript in this file!
 */
var value,
  tempVal,
  firstHalf,
  secondHalf,
  operator,
  state = false,
  final = false,
  cont = false;

let display = $("#display"),
  add = $("#addButton"),
  subtract = $("#subtractButton"),
  multiply = $("#multiplyButton"),
  divide = $("#divideButton"),
  equals = $("#equalsButton"),
  clear = $("#clearButton");
// buttons = $("tr").find("button[value]");

// buttons.click(displayVal);
$("#button0").click(displayVal);
$("#button1").click(displayVal);
$("#button2").click(displayVal);
$("#button3").click(displayVal);
$("#button4").click(displayVal);
$("#button5").click(displayVal);
$("#button6").click(displayVal);
$("#button7").click(displayVal);
$("#button8").click(displayVal);
$("#button9").click(displayVal);

clear.click(displayClear);
equals.click(doMath);
add.click(doAdd);
subtract.click(doSubtract);
divide.click(doDivide);
multiply.click(doMultiply);

function displayVal() {
  if (final) {
    display.val("");
    final = false;
  }
  if (state || cont) {
    value = Number($(this).val());
    tempVal = display.val();
    display.val((tempVal += value));
    secondHalf = Number(tempVal) || 0;
  } else {
    value = Number($(this).val());
    tempVal = display.val();
    display.val((tempVal += value));
    firstHalf = Number(tempVal);
  }
}

function doAdd() {
  if (operator) {
    doMath();
  } else {
    operator = "+";
    display.val("");
    clearState();
  }
  cont = true;
}

function doSubtract() {
  console.log("minus");
  if (operator) {
    doMath();
    operator = "-";
  } else {
    operator = "-";
    display.val("");
    clearState();
  }
  cont = true;
}
function doMultiply() {
  if (operator) {
    doMath();
    operator = "*";
  } else {
    operator = "*";
    display.val("");
    clearState();
  }
  cont = true;
}
function doDivide() {
  if (operator) {
    doMath();
    operator = "/";
  } else {
    operator = "/";
    display.val("");
    clearState();
  }
  cont = true;
}

function doMath() {
  console.log(firstHalf, operator, secondHalf);
  if (operator == "+") {
    display.val(firstHalf + secondHalf);
  }
  if (operator == "-") {
    display.val(firstHalf - secondHalf);
  }
  if (operator == "/") {
    if (secondHalf == 0) {
      display.val("Infinity");
    } else {
      display.val(firstHalf / secondHalf);
    }
  }
  if (operator == "*") {
    console.log("Multiply");
    display.val(firstHalf * secondHalf);
  }
  firstHalf = display.val();
  operator = "";
  state = false;
  final = true;
  cont = false;
}

function clearState() {
  state = true;
  display.val("");
}

function displayClear() {
  final = false;
  state = false;
  firstHalf = 0;
  secondHalf = 0;
  display.val("");
}
