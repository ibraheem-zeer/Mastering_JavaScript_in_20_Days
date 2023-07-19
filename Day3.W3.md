# Scope & Function Expressions
```js
function teacher() { }

var myTeacher = function anotherTeacher() {
    console.log(anotherTeacher)
}

console.log(teacher)          // function
console.log(myTeacher)        // function
console.log(anotherTeacher)   // ReferenceError
```
