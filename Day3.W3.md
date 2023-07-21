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

 regular functions and arrow functions have different syntax and behaviors, particularly related to this binding, arguments, and their use as constructors. Regular functions are more versatile, while arrow functions are concise and often used for short, non-method functions and functions that require lexical this binding. The choice between regular functions and arrow functions depends on the specific use case and coding preferences.
 
 ---
 
the choice between regular functions and arrow functions should primarily be based on how you want to handle this and the coding style you prefer. In terms of performance, the difference is generally insignificant, and other factors such as readability, maintainability, and code clarity should take precedence when deciding which type of function to use

---

# Advanced Scope
## Lexical socpe

is a concept in JavaScript that determines the visibility and accessibility of variables within a block of code based on its physical location (lexically) in the source code during the compile-time, rather than at runtime
---
Lexical Scoping Rules:

- Variables declared inside a function are only accessible within that function (and any nested functions inside it). They are not visible outside the function.
- If a variable is not found in the current function's scope, JavaScript looks up the scope chain to the enclosing (parent) function to find the variable.
- The process of going up the scope chain continues until the global scope is reached. Variables declared in the global scope are accessible everywhere in the program.
```js
function outerFunction() {
  const outerVar = "I am from outerFunction";
  
  function innerFunction() {
    const innerVar = "I am from innerFunction";
    console.log(innerVar); // Accessible here
    console.log(outerVar); // Accessible here
  }
  
  innerFunction();
  console.log(innerVar); // Not accessible here (ReferenceError)
}

outerFunction();
console.log(outerVar); // Not accessible here (ReferenceError)

```
---
## Dynamic scope
 is a concept used in some programming languages, where the visibility of variables is determined by the call stack or the chain of function calls at runtime, rather than their location in the source code , dynamic scope is not a native feature of the language

---

## function scoping

```js
var teacher = "Khldoon"

function anotherTeacher() {
    var teacher = "Khalid"
    console.log(teacher)        //output = Khalid
}

anotherTeacher()

console.log(teacher)        // Kyle
```

main porblems that we solbe by don't make stuff availavle
- naming collision problems
- if we hide something that means we somebody else can't accidentally of intentionally misuse that thing
- overloocked , if we hide something , we protect our self for future refactoring 

---

### IIFE
```js
var teacher = "Ky";

(function(teacher) {
    console.log(teacher)    // su
})("su")

console.log(teacher)        // Ky

````
---
```js
// without use IIFE
var teacher ;
try {
    teacher = featchTeacher(1);
}
catch (err) {
    teacher = "ibraheem "
}

//========================================

// Using IIFE

var teach = (function getTeach() {
    try {
        return fetchTeach
    } catch (err) {
        return "Khldoon"
    }
})();
// more clearly but not common
```

---

## Block Scoping

```js
var teacher = "Khldoon";

{
    let teacher = "Khlid"
    console.log(teacher)    // output = Khlid
}

console.log(teacher)        // output = khldoon

/*
    here we can't use var beacuse historically vars have been
    attaching themselves to the outer function scope or global scope
    so a var here would have attached itself to the outer scope rather
    than the curly prace
*/

// to see the problem

var teacher = "Khldoon";

{
    var teacher = "Khlid"
    console.log(teacher)    // output = Khlid
}

console.log(teacher)        // output = Khlid

// in the second console.log the output will be same the first one
```




































