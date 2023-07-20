# Scope & Function Expressions
```js
function teacher() { }        // function Declaration

var myTeacher = function anotherTeacher() {    // function expression
    console.log(anotherTeacher)
}

console.log(teacher)          // function
console.log(myTeacher)        // function
console.log(anotherTeacher)   // ReferenceError
```
Differences between `Declaration` and `Expression` :
function Declaration add their name they attach their marble to the enclosing scope
---
---
## anonymous and naming function
anonymous :wee see a functtion expression but without name 
```js
var ckickHandler = function() {}    // anonymous func

var keyHandler = function keyHandler() {}    // named func
```

**anonymous** function expression is more common and more popular than named function
---
whay we should alwaays use name-function expressions
- Reliable function self-reference
- More debuggable stack traces
- More self-documenting code

the choice between regular functions and arrow functions should primarily be based on how you want to handle this and the coding style you prefer. In terms of performance, the difference is generally insignificant, and other factors such as readability, maintainability, and code clarity should take precedence when deciding which type of function to use
