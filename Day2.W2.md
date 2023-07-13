# Closure
- Closure is the most esoteric of JavaScript concepts
- Enables powerful pro-level functions like ‘once’ and ‘memoize’
- Many JavaScript design patterns including the module pattern use closure
- Build iterators, handle partial application and maintain state in an asynchronous world
```javascript
function multiplyBy2 (inputNumber){
const result = inputNumber*2;
return result;
}
const output = multiplyBy2(7);
const newOutput = multiplyBy2(10);

// this fun will get a new memory every run/invocation
```

## Functions with memories
- When our functions get called, we create a live store of data (local memory/variable environment/state) for that function’s execution context.
- When the function finishes executing, its local memory is deleted (except the returned value)
- But what if our functions could hold on to live data between executions?
- This would let our function definitions have an associated cache/persistent memory
- But it all starts with us returning a function from another function
```javascript
function createFunction() {
 function multiplyBy2 (num){
 return num*2;
 }
 return multiplyBy2;
}
const generatedFunc = createFunction();
const result = generatedFunc(3);

// this fun can be returned from other functions in js

//=======================================================================

function outer (){
 let counter = 0;
 function incrementCounter (){
 counter ++;
 }
 incrementCounter();
}
outer();

// calling a function in the same function call as it was defined
// where we define your ouer fun determines what data it has access to when you call it

//=========================================================================================

function outer (){
 let counter = 0;
 function incrementCounter (){ counter ++; }
 return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();

// calling a function outside of the function call in which it was defined
```
---

**`The bond`** : When a function is defined, it gets a bond to the surrounding Local Memory
(“Variable Environment”) in which it has been defined
---
**Backpaack**
- We return incrementCounter’s code (function definition) out of outer into global and give it a new name - myNewFunction
- We maintain the bond to outer’s live local memory - it gets ‘returned out’ attached on the back of incrementCounter’s function definition.
- So outer’s local memory is now stored attached to myNewFunction - even though outer’s execution context is long gone
- When we run myNewFunction in global, it will first look in its own local memory first (as we’d expect), but then in myNewFunction’s ‘backpack’
---
**we can call this backpack**
- (C.O.V.E) => Closed over Variable Environment
- (P.L.S.R.D) => Persistent Lexical Scope Referenced Data
- Backpack
- Closure

```javascript
function outer (){
 let counter = 0;
 function incrementCounter (){
 counter ++;
 }
 return incrementCounter;
}
const myNewFunction = outer();
myNewFunction();
myNewFunction();
const anotherFunction = outer();
anotherFunction();
anotherFunction();
```







































