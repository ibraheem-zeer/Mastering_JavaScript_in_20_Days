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

---
# Promises
Special objects built into JavaScript that get returned immediately when we make a call to a web browser API/feature (e.g. fetch) that’s set up to return promises

---

Any code we want to run on the returned data must also be saved on the promise object Added using `.then` method to the hidden property ‘onFulfilment’ Promise objects will automatically trigger the attached function to run (with its
input being the returned data

- Problems
  + 99% of developers have no idea how they’re working under the hood
  + Debugging becomes super-hard as a result
  + Developers fail technical interviews
- Benefits
  + Cleaner readable style with pseudo-synchronous style code
  + Nice error handling process
---
We have rules for the execution of our asynchronously delayed code

Hold promise-deferred functions in a microtask queue and callback function in a task queue (Callback queue) when the Web Browser Feature (API) finishes Add the function to the Call stack (i.e. run the function) when:
- Call stack is empty & all global code run (Have the Event Loop check this condition)

Prioritize functions in the microtask queue over the Callback queue

---

`Non-blocking applications:` This means we don’t have to wait in the single thread and don’t block further code from running

`However long it takes:` We cannot predict when our Browser feature’s work will finish so we let JS handle automatically running the function on its completion

`Web applications:` Asynchronous JavaScript is the backbone of the modern web - letting us build fast ‘non-blocking’ applications


































