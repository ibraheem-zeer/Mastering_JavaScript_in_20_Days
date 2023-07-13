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
// Hello
```
