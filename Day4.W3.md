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

// =======================================================

var teacher = "any"

otherTeacher()

function otherTeacher() {
    console.log(teacher)    // undefined  :))))))))))))))))))))
    var teacher = "any2"
}

//===================================================================

teacher = "any1"
var teacher

console.log(getTeacher())    // any1

function getTeacher() {
    return teacher
}
```

---

```js
// let doesn't hoist ?

{
  teacher = "any1"  // TDZ Error  (Temporal Daead Zone error)
  let teacher
}

var teacher = "any1"

{
  console.log(teacher)  // TDZ Error
  let teacher = "any2"
}
```

--- 
# Closure

to understand `Closure` we should to understand `Lexical scope`

---

`closure` as an idea is actually predating computer science , it actually comes to us from lambda calculus 

--- 
**but in programming :** `closure` is when a function is able to remember and and access it's `lexical scope` , the variavles outside of itself (free variables )  , even when that function executes in a different scope

```js
for (var i = 0; i <= 3; i++) {
    setTimeout(() => {
        console.log(`i : ${i}`)
    }, i * 1000);
}

/*
    there's only one i variable 
    and we have tree functions
    if we wanted to have three
    separate values , how many
    variables would we need?
    we need three variables and
    there is only one , so the
    it can only have the one value 
    and in this case it's gonna
    have the value that occurs at
    the end of the loop (4)
    we can't effectively use closure
    until we separate ourselves from
    that perception of capturing values

*/

//=======================================

// to solve it

for (var i = 0; i <= 3; i++) {
    let j = i
    setTimeout(() => {
        console.log(`j : ${j}`)
    }, j * 1000);
}

/* 
    j is going to run every time
    the loop iterates and it's gonna
    create a whole new j inthat
    whole new iteration of the loop
*/
```
---
## Modules Pattern

to understand `Modules` we should to understand `closure` , we don't have `Module` if
we don't have a `Closure` 

---
the idea of a module is that there are things that are public 
that's our public API , and there are things that are private 
that's things thate nobody on the outside can touch

```js
var workshop = (function Module(teacher) {    // outer enclosing function (IIFE)
    var publicAPI = { ask, }
    return publicAPI

    function ask(question) {// closed over those variables  , in this case closed over teacher variable
        console.log(teacher, question)
    }
})("Khldoon")

workshop.ask("It's a Module , right?")
```

**Note :** when we run a `Module` as `IIFE` , that's kind of like saying it's a singleton 

### ES6 Modules & NodeJs

```mjs
//this file with .mjs extention

var teacher = "Khldoon"

export default function ask(question){
  console.log(teacher , question)
}

```

**Note :** every thing in module is a privete and if we make somthing public we use export keyword , so anything we export is public 

**Note :** impossible to have more than one ES6 Modules in the same file

---
### Bring modules 

there are two style to import Modules 
- named import syntax
  ```js
  // Example

  import ask from "workshop.mjs"

  ask("it's a deafult import , right??")
  ```
- namespace import
  ```js
  // Example

  import * as workshop from "workshop.mjs"

  worksohp.ask("It's a namespace import , right??")
  ```























