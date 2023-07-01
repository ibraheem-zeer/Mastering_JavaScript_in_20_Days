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








