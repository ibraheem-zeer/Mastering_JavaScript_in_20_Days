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


---

Q1
---
```js
const task1 = (cb) => setTimeout(() => {
    const message = "Task 1 has executed successfully!";
    cb(message);
}, 3000)

const task2 = (cb) => setTimeout(() => {
    const message = "Task 2 has executed successfully!";
    cb(message);
}, 0)

const task3 = (cb) => setTimeout(() => {
    const message = "Task 3 has executed successfully!";
    cb(message);
}, 1000)

const task4 = (cb) => setTimeout(() => {
    const message = "Task 4 has executed successfully!";
    cb(message);
}, 2000)

const task5 = (cb) => setTimeout(() => {
    const message = "Task 5 has executed successfully!";
    cb(message);
}, 4000)

const asyncTasks = [task1, task2, task3, task4, task5];

const executeInSequenceWithCBs = async (tasks) => {
    let arr = []
    for (let i = 0; i < tasks.length; i++) {
        const myprom = () => new Promise(resolve => {
            const task = tasks[i]
            task((message) => {
                //console.log(message)
                resolve(message)
            })
        })
        const val = await myprom()
        arr.push(val)
        //console.log(`this is value of : ${val}`)
    }
    return arr
}

executeInSequenceWithCBs(asyncTasks).then(data => console.log(`this is our data ${JSON.stringify(data)}`))
```

---

Q2
---
```js
const executeInParallelWithPromises = (apis) => {
const promises = apis.map((api) =>
 fetch(api.apiUrl)
   .then((response) => response.json())
   .then((data) => ({
     apiName: api.apiName,
     apiUrl: api.apiUrl,
     apiData: data,
   }))
);

return Promise.all(promises);
};

const apis = [
{
 apiName: "products",
 apiUrl: "https://dummyjson.com/products",
},
{
 apiName: "users",
 apiUrl: "https://dummyjson.com/users",
},
{
 apiName: "posts",
 apiUrl: "https://dummyjson.com/posts",
},
{
 apiName: "comments",
 apiUrl: "https://dummyjson.com/comments",
},
];

executeInParallelWithPromises(apis)
.then((results) => console.log(results))
.catch((error) => console.log(error));

```

---

Q3
---
```js
const fetchApiData = async (api) => {
  const response = await fetch(api.apiUrl);
  const data = await response.json();
  return { apiName: api.apiName, apiUrl: api.apiUrl, apiData: data };
};

const executeInSequenceWithPromises = async (apis) => {
  const results = [];
  for (const api of apis) {
    const result = await fetchApiData(api);
    results.push(result);
  }
  return results;
};

const apis = [
  {
    apiName: "products", 
    apiUrl: "https://dummyjson.com/products",
  }, 
  {
    apiName: "users", 
    apiUrl: "https://dummyjson.com/users",
  }, 
  {
    apiName: "posts", 
    apiUrl: "https://dummyjson.com/posts",
  }, 
  {
    apiName: "comments", 
    apiUrl: "https://dummyjson.com/comments",
  }
];

executeInSequenceWithPromises(apis)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

```





























