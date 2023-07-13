# Asynchronous JavaScript
Asynchronicity : the feature that makes dynamic web applications possible
---
JavaScript is:
- Single threaded (one command runs at a time)
- Synchronously executed (each line is run in order the code appears)
```javascript
// setTimeout
function printHello(){
 console.log("Hello");
}
setTimeout(printHello,1000);
console.log("Me first!");

// to delay a function directly using setTimeout
// output is :
// Me first!
// Hello // Hello will desplay after 1 Sec

// ============================================================

function printHello(){
 console.log("Hello");
}
setTimeout(printHello,0);
console.log("Me first!");

/*
 output :
   Me first!
   Hello
*/
```
---
core of JavaScript engine has 3 main parts
- Thread of execution
- Memory/variable environment
- Call stack
---
Web browser : Js is part of Web broeser , there are many features inside it such as 
- Dev tools , console
- Sockets
- network Request , Fetch / xhr
- HTM DOM , Documents
- Timer , setTimeout()
all this features we can’t write code directly such as written in C++
```
function printHello(){ console.log("Hello"); }

function blockFor1Sec(){ //blocks in the JavaScript thread for1 sec }

setTimeout(printHello,0);

blockFor1Sec()

console.log("Me first!");
```
---
**ES5 Web Browser APIs with callback functions**
- Problems
  + Our response data is only available in the callback function - Callback hell
  + Maybe it feels a little odd to think of passing a function into another function only for it to run much later

- Benefits
  + Super explicit once you understand how it works under-the-hood












































