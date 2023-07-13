# Classes & Prototypes
Classes, Prototypes - Object Oriented JavaScript
- An enormously popular paradigm for structuring our complex code
- Prototype chain - the feature behind-the-scenes that enables emulation of OOP but is a compelling tool in itself
- Understanding the difference between __proto__ and prototype
- The new and class keywords as tools to automate our object & method creation
### Core of development (and running code)

```javascript
// create user1 to play , user has name and score and we need to increment his score
const user1 = {
 name: "Will",
 score: 3,
 increment: function() { user1.score++; }
};
user1.increment();

// create user2 using Dot notiation
const user2 = {}; //create an empty object
//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
 user2.score++;
};

```
