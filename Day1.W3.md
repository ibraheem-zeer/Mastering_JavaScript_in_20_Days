# Introduction
this course to help us to understand the algorithms , the DNA of js , to be more
effective as a developer 


# Types
## Primitive Types
Note : in js everything is an object , it is not a correct statment 
- `undegined`
- `string`
- `number`
- `boolean` , true and false only note zero and one
- `object`
- `symbol` , recently add in ES6
other types or other things may behave like types that
- undeclared ?
- null , js calls that a type , but it's a little bit cocky
- function , fun is subtype of the object type
- array , arrays is subtype of the object type with numeric indexing
- bigint

**Note** only objects type is : oject , function and array 
---
```javascript
var v ;
typeof v;    //undefined

v = "1"
typeof v;    //string

v = 2
typeof v;    //number

v = true
typeof v;    //boolean

v = {}
typeof v;    //object

v = Symbol()
typeof v;    //symbol

v = null
typeof v;    //object , whay??

v = function() {}
typeof v;    //function

v = [1,2,3]
typeof v;    //object 

v = 42n
typeof v  //bigint
```
---
## Emptiness 
### undefined vs undeclared vs uninitialized
uninitialized => aka TDZ
- undefined & undeclared : we can fairly straihtforwardly sift those out
- uninitialized : introduced with es6 , uninitialized , TDZ => (temporal dead zone)
---
### NaN & isNaN

NaN is not a number , and it's mean invalid number
```javascript
var any = Number("n/a")    // NaN

var num = 5 - 'string'    // NaN

isNaN(any)    // true
isNaN("string") // true

Number.isNaN(any) // true
Number.isNaN("string") // false
```
---
### Negative Zero

ussing in games for very similar purposes 

---

### Fundamental Objects
- Built-In Object
- Native Functions

---
Use new : 
- Object()
- Array()
- function()
- Date()
- RegExp()
- Error()

Don't use new : 
- String()
- Number()
- Boolean()
---
```js
var today = new Date("july 16 , 2023")
var nyGPA = String(transcript.gpa)
```
---
# Coercion
## Abstract Operations

ToPrimitive() : 
- for number :
  - valueOf()
  - toString()

- for string :
  - toString()
  - valueOf()
---
### toString()
- null => "null"
- undefined => "undefined"
- true => "true"
- false => "false"
- 3.144 => "3.144"
- 0 => "0"
- -0 => "0"
---
### toNumber()
- "" => 0
- "0" => 0
- "-0" => 0
- " 009" => 9
- "3.144" => 3.144
- "0." => 0
- ".0" => 0
- "." => NaN
- "0xaf" => 175
- false => 0
- true => 1
- null => 0
- unndefined => NaN

---

### Coercion

```
var num = 16

console.log(`anything ${num.toString()} is a strings haha`)
// output = anything 16 is a strings haha

//================================================================

console.log(`anything ${String(num)} is a strings haha`)
// output = anything 16 is a strings haha
```
---
### Boxing
how we access the `.length` of some string value ? :
it turns out that's called boxing , it's a form of implicit coercion , it's not called out in the same way in the abstract operations 
---
---
---
[**Asnwer To Quistions**](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week3-day1-tasks/tasks.md)
---
Q1
```js
function convertStringToNumber(input) {
  if(typeof input === "string" ){
      return parseInt(input)
  }
}

convertStringToNumber("253") // output = 253

typeof convertStringToNumber("253") // output = number
```

---
Q2
```js
const checkNaN = (value) => {
    let check = value
    if(!isNaN(check)){
        return false
    }else {
        return true
    }
};
```
---
Q3
```js
function isEmptyValue(value) {
  if(value === "" || value === 'null' || value === 'undefined'){
      return true
  }else {
      return false
  }
}
```
Q4
```js
function compareObjects(input1, input2) {
    const obj1 = input1;
    const obj2 = input2
    if(typeof obj1 === 'object' && typeof obj2 === 'object'){
        if(obj1.value === obj2.value){
            return true
        }else {
            return false
        }
    }else {
        return [obj1 , obj2]
    }
}
```
---
Q4
```js
const complexCoercion = (input) => {
      if(typeof input === 'number'){
          input.toString()
          return `${true} the new string is : ${input}`
      }else if (typeof input === 'string'){
          return `${true} the string is : ${input}`
      }else if(typeof input === 'null' || typeof input === 'undefined') {
          return `${false} this is : ${input}`
      }else{
          return input
      }
}
```









