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
```
