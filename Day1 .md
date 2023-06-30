# DOM
## Document Object Model
---
we can use DOM to Read and Write(Edit) on HTML from JavaScript4
---
using document we can access to HTML code 
```
// this code will return the title of page
document.title

// also we can Edit title
document.title = "New Title page"
```
---
can use .children to get elements inside the tags
```Ex:
//this code will return all elements inside the body
document.body.children
```
# **Also we can use**
- document.getElementById("any") , to Select first element of its Id is **any**
- document.querySelector("#any") if id or (".any") if class , same as getElementById but has more flexibility
- document.getElementsByTagName("any") , to select all elements has the same tag name
- document.querySelectorAll("any") if tag , ("#any") if id , (".any") if class
- document.getElementsByClassName("")

---
## using above codes , we can use it to change text content or add text content
#### Examples
```
// to change text content
document.getElementById("p1-name").textContent = "Ibraheem" // the output will change to ibraheem

// to add text content
document.getElementById("p1-name").append = " Zeer" // the output will change to ibraheem Zeer
```
---
**Summary** , i learned how to read and edit in html from js using some codes
```
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
    ```
    "Hello" , 'Hello' , `Hello`
    ```
  + number
    ```
    10 , 10.5 , -10 , 10.21e9 , Infinity
    ```
  + boolean
    ```
    true , false
    ```
  + undefined
  + null
+ Objects
---
can use Build-in function typeof() to know what is the type 
```
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
# Strings
string made of **characters** , Characters are in a specific order Each gets a number, starting at 0
```
"ibraheem"[0] // output = 'i'
"ibraheem"[2] // output = 'r'
```
**Some of Build-in function can use with strings**
- .indexOf()
    ```
    "ibraheem".indexOf("h") // output = 4
    // it return number of index for  character
    ```
- .include()
    ```
    "ibraheem".includes("i") // true
    // it return true if the character include in string or false if not
    ```
- .startsWith()
    ```
    "ibraheem".starstWith("i") // true
    // it return true if the string start with character or false if not
    ```
---
**Summary** , I learned what a string is and that it consists of a string of character and can use build-in function to get some benefits such as 
```
include
indexOf
startsWith
```
