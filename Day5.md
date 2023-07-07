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
But when we need to do something that takes a long time JS can only do one task at a time ("single-threaded") So when we give JS a task that takes a while, it doesn't stop and wait
```javascript
console.log("This will print first");
setTimeout(() => console.log("This will print third"), 1000);
console.log("This will print second");
```
---
**Some things that take time:**
- eventsAsking a user to pick a file

- Getting permission to access the camera/mic

- Loading data from the interwebs

---

# data Fetching & promises
APIs provide URLs that point at data we care about
```json
{
    "message": [
      "afghan",
      "basset",
      "blood",
      "english",
      "ibizan",
      "plott",
      "walker"
    ],
    "status": "success"
  }
```
Some time we need data from elsewhere on the web and we can do that by accessing URL , API
---
fetch() : build in function to lode data from APIs in js
---
Promises : something that comes into play in js when we are doing things that take a long time or looking for things that we are going to need some time to find.

```javascript
fetch("https://dog.ceo/api/breed/hound/list")
// output = Promise { <state>: "pending" }
```
---
**Promises can be in 3 possible states:**

- `pending`: still waiting for the value, hang tight

- `fulfilled` (aka "resolved"): finally got the value, all done

- `rejected`: sorry couldn't get the value, all done It takes time for Promises to resolve, so they are  "asynchronous"

---

await : tell JS to stop and wait for an asynchronous operation to finish

```javascript
let response = await fetch("https://dog.ceo/api/breed/hound/list");
console.log(response);
```
>**Note : [a] 200 mean => ok , [b] 404 mean => not Found**
---
```javascript
response.json()
//  this is just a conventional format that js knows how to read
```

























