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
**Answer to Questions**
---
Q1
[Q1](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)
```javascript
const a = arr.filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num , 2))
  return a
```
---
Q2


































