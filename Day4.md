# Events & Handlers

We can detect events with JS using an event listener The **.addEventListener()**

```javascript
document.addEventListener("click", () => {
    console.log("clicked")
});
// when the code run if we clicked on page , in console we can see "clicked"
```
---
JS passes an event object to the handler function with information about the event If we accept this as a parameter, we can use it to get details
```javascript
document.addEventListener("click", (event) => {
    console.log(event);
});
```
----
event.target is the element the event fired on
```javascript
document.addEventListener("click", (event) => {
    console.log(event.target);
});
// if we click on anything such as background page , the output will be details of background page
```
---
**Types of events**
- "click"
- "dblclick"
- "mouseover"
- "mouseout"
---

# Conditionals
An expression whose value is used as a condition.
```javascript
let age = [15 , 20 , 19 , 22 , 50 , 30 , 40];
let moreThan19Counter = 0
for(let i = 1 ; i <= age.length ; i++){
    if(age[i] > 19){
        console.log(moreThan19Counter += 1 )
    }
}

//=======================================================

function comp(x , y) {
    if (x == y){
        console.log(`${x} Equal to ${y}`)
    }else if (x < y) {
        console.log(`${x} less than ${y}`)
    } else {
        console.log(`${x} greater than ${y}`)
    }
}

comp(9,5) // out = 9 greater than 5
comp(5,9) // out = 5 less than 9
comp(9,9) // out = 9 Equal to 9

//========================================================================================

if (0) {
    console.log("zero is truthy");
} else {
    console.log("zero is falsy");
}
```
---
## Logic And
| A | B | A && B |
| ----------- | ----------- | ----------- |
| true | true | true |
| treu | false | false |
| false | true | false |
| false | false | false |
---
## Logic Or
| A | B | A or B |
| ----------- | ----------- | ----------- |
| true | true | true |
| treu | false | true |
| false | true | true |
| false | false | false |


---
## short condition
JS also has a shortcut operator for writing quick conditionals
```javascript
//syntax
//condition ? valueIfTrue : valueIfFalse;

// Real example :
let mood = forecast === "sunny" ? "happy" : "sad";
```
---
# Loop
The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.
```javascript
//syntax
//for (initialization; condition; afterthought)
//  statement
```
---
**for loops require us to:**
- declare & initialize a loop counter
- give a condition for the loop to keep running
- describe how to change (usually increment) the counter each time

```javascript
for (let count = 0; count <= 100; count += 10) {
    console.log(count);
}
```

---
## for ... of
for ... of loops let us more easily iterate over items in a collection
```javascript
const numbers = [1,2,3];
for (let n of numbers) {
    console.log(n);
}
// output = 1 2 3
```
---
We can use for...of to iterate over characters in a string
```javascript
for (let char of "ALOHA") {
    console.log(char);
}
// output = A L O H A

//==========================================================

for (let item of ["pop", 6, "squish"]) {
    console.log(typeof item);
}
// output = string number string
```
---
# Map & Filter
## Map
Map : calls a function on each item in an array to create a new array
```javascript
const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const nicknames = spices.map(s => s.nickname + " Spice");
const names = spices.map(s => `${s.name} spice`) // thsi is more useful
```
---
## Filter
Filter : calls a true/false function on each item and creates a new array with only the items where the function returns true

```javascript
const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const mels = spices.filter(s => s.name.includes("Mel"));
// output = 0
{name: 'Mel B', nickname: 'Scary'} 
{name: 'Mel C', nickname: 'Sporty'}
```
---
### spread(...)
Is another neat trick for iterating over arrays it lets us take all the items in an array and spread around
---
- We can use it to put all the items from one array inside another array
- We can also use it to pass all the items from an array as arguments to a function or method
```javascript
const oldBurns = ["square", "wack"];
const newBurns = ["basic", "dusty", "sus"];
const burnBook = [...oldBurns, ...newBurns];
const burnBook = oldBurns.concat(newBurns);

//==================================================

const skills = ["HTML", "CSS", "JS"];
const newSkills = ["React", "TypeScript", "Node"]
skills.push(...newSkills);
console.log(...skills);
```
**Answer to questions**
---
Q1
```javascript
function checkSign(num) {
  return num == 0 ? 'zero' : num < 0 ? 'negative' : 'positive'
}

console.log(checkSign(20))
```
---
Q2
```javascript
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes === 1) {
    return names[0]
  }
  else if (strokes <= par - 2) {
    return names[1]
  }
  else if (strokes == par - 1) {
    return names[2]
  }
  else if (strokes == par) {
    return names[3]
  }
  else if (strokes == par + 1) {
    return names[4]
  }
  else if (strokes == par + 2) {
    return names[5]
  }
  else if (strokes >= par + 3) {
    return names[6]
  }
  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
```
---
Q3
```javascript
const ratings = watchList.map(ele => ({
  title: ele.Title ,
  rating: ele.imdbRating
}));
```
---
Q4
```javascript
const filteredList = watchList.filter(rating => rating.imdbRating > 8.0)
      .map(function(movies) {
        return { 
          title : movies.Title,
          rating : movies.imdbRating
        }
      }) 
```
---
[Q5 part one](https://github.com/orjwan-alrajaby/gsg-expressjs-backend-training-2023/blob/main/learning-sprint-1/week2-day1-tasks/tasks.md)
```javascript
async function mapAsync(array , inst) {
    return inst(array)
}
async function addSelf(ele) {
    return ele.map(ele => ele+ele)
}
const result = mapAsync([1, 2, 3] , addSelf);
```



