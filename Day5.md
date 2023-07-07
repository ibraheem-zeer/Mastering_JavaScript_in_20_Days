# Doggos Quiz Game
## while loop
if we want to loop over and over again until something changes to stop looping
while loop allow us to keep running and chunk of code
```javascript
let fiveRandomNumbers = [];
while (fiveRandomNumbers.length < 5) {
    fiveRandomNumbers.push(Math.random());
}
// output = 5 random numbers

```
---
## setTimeout
Usually, our JS code does things that are very quick So JS can usually run straight through our program "synchronously"
```javascript
console.log("This will print in a New York minute");
console.log("This will print one New York minute later");
```
