// script.js

// Append numbers/operators to the display
function append(value) {
    document.getElementById("display").value += value;
  }
  
  // Append scientific function with "("
  function appendFunction(func) {
    document.getElementById("display").value += func;
  }
  
  // Clear the display
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Delete last character
  function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
  }
  
  // Evaluate the expression
  function calculate() {
    let input = document.getElementById("display").value;
    try {
      let result = eval(input);
      document.getElementById("display").value = result;
    } catch (e) {
      alert("Invalid Expression");
    }
  }
