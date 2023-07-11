# JavaScript Principles
Execution context
- Thread of execution
- Memory

```
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
