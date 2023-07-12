# JavaScript Principles
Execution context
- Thread of execution
- Memory

```javascript
const num = 3;
function multiplyBy2 (inputNumber){
const result = inputNumber*2;
return result;
}
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);

//*********** Memory ******************
// num : 3
// multyplayBy2 : f
// output : 6
// newOutput : 20
```
> output will join to block
## Global execution context
#### output = multiplyBy2(3)
|  | Local Memory |
| ----------- | -----------
|  | input num : 3 | 
|  | result : 6 |
|  |  |
| return result |  |

#### output = multiplyBy2(3)
|  | Local Memory |
| ----------- | -----------
|  | input num : 10 | 
|  | result : 20 |
|  |  |
| return result |  |

**Note : after return result the output will gose to function and  the output Evaluated to 6 , then 20**
> parameters , Arguments , Evaluate 

## Call Stack

- JavaScript keeps track of what function is currently running
- Run a function - add to call stack
- Finish running the function - JS removes it from call stack
- Whatever is top of the call stack
- that’s the function we’re currently running

---
# Function & Callbacks

Functions in javascript = first class objects
They can co-exist with and can be treated like any other javascript object
1. Assigned to variables and properties of other objects
2. Passed as arguments into functions
3. Returned as values from functions
---
Higer Order function : The outer function that takes in a function is our higher-order function
---
Callback function : The function we insert is our callback function
---
```javascript
function copyArrayAndManipulate(array, instructions) {
 const output = [];
 for (let i = 0; i < array.length; i++) {
 output.push(instructions(array[i]));
 }
 return output;
}
function multiplyBy2(input) {return input * 2;}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// Higer order function is : copyArrayAndManipulate
// callback function is : multiplyBy2
```
---
**out of course** : `reduce()` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value
```javascript
/*
  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

//*************** Examples *********************************
let nums = [10, 20, 15, 30];

let add = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5);

console.log(add);

//===============================================================

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});
console.log(check);
//==================================================================================
let removeChars = ["I", "B", "R", "@", "A", "@", "@", "H", "E", "@", "E" , "M"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString..toLowerCase());

```
---
---
**Answer to Questions**
---
[Q1](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)
```javascript
const a = arr.filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num , 2))
  return a
```
---
[Q2](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)
```

```


































