function Calculator(resultsId, tempDisplay) {
  this.resultsId = resultsId;
  this.tempDisplay = tempDisplay;
  this.operationsArray = [];
}

Calculator.prototype.concatenateToLast = function(input) {
  this.operationsArray[this.operationsArray.length - 1] += input;
}

Calculator.prototype.getLast = function() {
  return this.operationsArray[this.operationsArray.length - 1];
}

Calculator.prototype.updateDisplay = function() {
  document.getElementById(this.resultsId).innerHTML = this.operationsArray.join('');
}

Calculator.prototype.appendNumber = function(number) {
  if (isNaN(this.getLast())) {
    this.operationsArray.push(number.toString()) //to string, so that we don't accidentally add numbers up instead of concatenating
  } else {
    this.concatenateToLast(number.toString())
  }
  this.updateDisplay();
}

Calculator.prototype.appendOperator = function(operator) {
  if (!isNaN(this.getLast())) {
    if (operator === '.') {
      this.concatenateToLast(operator);
    } else {
      this.operationsArray.push(operator);
    }
    this.updateDisplay();
  }
}

Calculator.prototype.clearDisplay = function() {
  this.operationsArray = [];
  document.getElementById(this.tempDisplay).innerHTML = '';
  this.updateDisplay();
}

Calculator.prototype.clearEntry = function() {
  this.operationsArray.pop();
  this.updateDisplay();
}

Calculator.prototype.getResult = function() {
  if (isNaN(this.getLast())) {
    this.operationsArray.pop();
  }
  var total = eval(this.operationsArray.join('')).toFixed(2);
  document.getElementById(this.tempDisplay).innerHTML = total;
  this.operationsArray = [total];
  this.updateDisplay();
}

var finalCalculator = new Calculator('result', 'tempdisplay');

document.getElementById('C').addEventListener('click', function() {
  finalCalculator.clearDisplay();
});
document.getElementById('CE').addEventListener('click', function() {
  finalCalculator.clearEntry();
});
document.getElementById('=').addEventListener('click', function() {
  finalCalculator.getResult();
});

var numbers = document.getElementsByClassName('number');

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function() {
    finalCalculator.appendNumber(this.getAttribute('id'));
  });

}

var operators = document.getElementsByClassName('operator');

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', function() {
    finalCalculator.appendNumber(this.getAttribute('id'));
  });

}

window.onkeyup = function(e) {
  e.preventDefault();
  var key = e.keyCode ? e.keyCode : e.which;

  if (key >= 48 && key <= 57) {
    finalCalculator.appendNumber(key - 48)
  } else if (key === 107) {
    finalCalculator.appendOperator('+');
  } else if (key === 109) {
    finalCalculator.appendOperator('-');
  } else if (key === 53) {
    finalCalculator.appendOperator('%');
  } else if (key === 106) {
    finalCalculator.appendOperator('*');
  } else if (key === 111) {
    finalCalculator.appendOperator('/');
  } else if (key === 110) {
    finalCalculator.appendOperator('.');
  } else if (key === 8) {
    finalCalculator.clearEntry();
  } else if (key === 32) {
    finalCalculator.clearDisplay();
  } else if (key === 13) {
    finalCalculator.getResult();
  }

}

//numerical keyboard keycodes seems to differ between my laptop and a normal keyboard
/*
else if (key >== 96 && key <== 105) {
    finalCalculator.appendNumber(key - 96);
  }
  */
