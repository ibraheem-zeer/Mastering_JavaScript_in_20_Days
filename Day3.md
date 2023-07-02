# Quiz project
```
<script type="text/javascript">
    // TODO 1: Declare & assign variables pointing to the corresponding element(s)
    // statement should be the "statement" div
    const statment = document.getElementById("statement");
    // optionButtons should be all the elements within the "options" div
    const optionButtons = document.querySelectorAll("#options button");
    // explanation should be the "explanation" div
    const explanation = document.getElementById("explanation");


    // TODO 2: Declare & assign a variable called fact
    // Its value should be an object with a statement, true/false answer, and explanation 
    let fact = {
        statment: "Array are like objects",
        answer: false,
        explanation: "Type of Array are Object",
    }

    // TODO 3: Set the text of the statement element to the fact's statement
    statment.textContent = fact.statment;

    // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
    // disable(button) should set the button element's attribute "disabled" to the value ""
    const disable = button => {
        button.setAttribute("disabled", "true");
    };
    // enable(button) should remove the attribute "disabled" from the button element
    const enable = button => {
        button.removeAttribute("disabled");
    };
    // TODO 5: Declare an isCorrect function that compares a guess to the right answer
    // isCorrect(guess) should return true if the guess matches the fact's answer
    function isCorrect(val) {
        return val === fact.answer.toString();
    }

    // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
    for (let button of optionButtons) {
        button.addEventListener('click', (event) => {
            console.log(`heard a click`);
            // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element
            explanation.textContent = fact.explanation;
            // TODO 7: Within the event handler function, 
            // Use a for loop to disable all the option buttons
            for (let button of optionButtons) {
                disable(button);
            }

            // TODO 8: Within the event handler function,
            // Get the guessed value from the clicked button
            // Use a conditional to compare the guess to the fact's answer
            // and add the "correct"/"incorrect" class as appropriate
            if (isCorrect(button.value)) {
                button.classList.add("correct")
            } else {
                button.classList.add("incorrect")
            }
        });
    };
</script>
```
---
# Function
The Function object provides methods for functions. In JavaScript, every function is actually a Function object.
























### Answer to Questions
---
Q1
```
function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);
```
---
Q2
```
// Declare the myGlobal variable below this line

const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
---
Q3
```
function myLocalScope() {
  // Only change code below this line
  var myVar = "ibraheem"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
---
Q4
```
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear   = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
```
---
Q5
```
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const rmd = arr.shift();
  return rmd;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
```








