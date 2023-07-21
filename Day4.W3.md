# Advanced Scope

## Hoisting
the word hist literally did not even appear in the js specification because it turns out that hoisting is not actually a real thing  , js engine doesn't hoist 

```js
student;    // undefined
teacher;    // undefined

var student = "Ibraheem"
var teacher = "Khldoon"

// =====================================

var student ;
var teacher ;

student;    // undefined
teacher;    // undefined

student = "Ibraheem"
teacher = "Khldoon"

//=======================================

teacher()    // "Khldoon"
otherTeacher()  // Cannot access 'otherTeacher' before initialization

function teacher() {
  return "Khldoon"
}

var otherTeacher = function() {
  return "Khalid"
}

//=======================================

function teacher() {
  return "Khldoon"
}

var otherTeacher

teacher()        // Khldoon
otherTeacher()   // TypeError

otherTeacher = function() {
  return "Khalid"
}

```
