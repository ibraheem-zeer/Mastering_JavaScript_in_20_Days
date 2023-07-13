# DOM
## Document Object Model
---
we can use DOM to Read and Write(Edit) on HTML from JavaScript
---
using document we can access to HTML code 
```javascript
// this code will return the title of page
document.title

// also we can Edit title
document.title = "New Title page"
```
---
can use .children to get elements inside the tags
```javascript
//this code will return all elements inside the body
document.body.children
```
## **Also we can use**
- document.getElementById("any") , to Select first element of its Id is **any**
- document.querySelector("#any") if id or (".any") if class , same as getElementById but has more flexibility
- document.getElementsByTagName("any") , to select all elements has the same tag name
- document.querySelectorAll("any") if tag , ("#any") if id , (".any") if class
- document.getElementsByClassName("")

---
### using above codes , we can use it to change text content or add text content
#### Examples
```javascript
// to change text content
document.getElementById("p1-name").textContent = "Ibraheem" // the output will change to ibraheem

// to add text content
document.getElementById("p1-name").append = " Zeer" // the output will change to ibraheem Zeer
```
---
**Summary** , i learned how to read and edit in html from js using some codes
```javascript
// Exerci

// [1] change player name to you & neighbor
document.getElementById("p1-name").textContent = "ibraheem"
document.getElementById("p1-name").append(" & neighbor")
//======================================================================================
// [2] Swap player Symbols
document.getElementById("p1-symbol").textContent = "O"
document.getElementById("p2-symbol").textContent = "X"
//======================================================================================
// [3] change Subtitle to "A game you know and love"
document.querySelector("head h2").append = " and love"
//======================================================================================
document.title.indexOf("") // to pick the little who you search 
document.title.include("") // to chisk if title have what you whant
document.querySelector("head h1").style.textTransform= "uppercase" // Upper case for all
```
---
# Values & Data Types
**JavaScript has two kinds of Data**
+ primitive types
  + string
    ```javascript
    "Hello" , 'Hello' , `Hello`
    ```
  + number
    ```javascript
    10 , 10.5 , -10 , 10.21e9 , Infinity
    ```
  + boolean
    ```javascript
    true , false
    ```
  + undefined
  + null
+ Objects
---
can use Build-in function typeof() to know what is the type 
```javascript
typeof("ibraheem") // string
typeof('12345446') // string
typeof(`true`)     // string
//=============================
typeof(1) // number
typeof(-1) // number
typeof(1.5) // number
//=============================
typeof(true) // boolean
typeof(false) // boolean
//=============================
typeof(null) // object
//=============================
typeof(undefined) //undefined
typeof(asd)       //undefined
```
---
## Strings
string made of **characters** , Characters are in a specific order Each gets a number, starting at 0
```javascript
"ibraheem"[0] // output = 'i'
"ibraheem"[2] // output = 'r'
```
**Some of Build-in function can use with strings**
- .indexOf()
    ```javascript
    "ibraheem".indexOf("h") // output = 4
    // it return number of index for  character
    ```
- .include()
    ```javascript
    "ibraheem".includes("i") // true
    // it return true if the character include in string or false if not
    ```
- .startsWith()
    ```javascript
    "ibraheem".starstWith("i") // true
    // it return true if the string start with character or false if not
    ```
---
**Summary** , I learned what a string is and that it consists of a string of character and can use build-in function to get some benefits
---
# Operators
first of all we can use + operator to concatinate two strings or more
```javascript
console.log('ibraheem' + ' ' + 'Zeer') // output = ibraheem zeer
console.log("Java" + "Script") // output = JavaScript
```
---

## Arithmetic Operators
- ( + ) add
- ( - ) subtract
- ( * ) multiply
- ( / ) divide

example :
```javascript
4 + 10 * 5 -3 + 1  // output = 52

(4 + 10) * ((5 -3) + 1) //output = 42
```
---
## Comparison Operators
- ( > ) greater than
- ( < ) less than
- ( >= ) greater than or equal to
- ( <= ) less than or equal to

example : 
```javascript
5 > 4 // true
5 < 4 // false
4 < 5 // true
4 > 5 // false
5 >= 5 //true
5 <= 5 //true
```

---
## Equality operators
| Strict | loosey goosey | meaning |
| ----------- | ----------- | ----------- |
| === | == | equals |
| !== | != | dose not equal |

> difference between strict and loosey goosey
strict shold be the Same type and content
```javascript
1 === 1        //true
1 == 1         //true
"1" === "1"    //true
"1" == "1"     //true
1 == "1"       //true
1 === "1"      //false
```

**Summary** , There are many different operators about what it does such as concatenate operators , Arithmetic Operators , Comparison Operators , Equality operators and more
 ---
 ---


#### Answers to questions :

Q1 
```javascript
a *= 5;
b *= 3;
c *= 10;
```
---
Q2
```javascript
let myStr = "This is the first sentence." ;
myStr += " ";
myStr += "This is the second sentence.";
```
---
Q3
```javascript
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
console.log(secondToLastLetterOfLastName)
```








































