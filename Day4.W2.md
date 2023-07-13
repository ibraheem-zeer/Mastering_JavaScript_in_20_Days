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

//create user3 using Object.create
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
 user3.score++;
};
```

**Solutions :**
### Generate Object using function
- Problems : Each time we create a new user we make space in our computer's memory for all our data and functions. But our functions are just copies

- Benegits :  Simple and easy
```javasctipt
function userCreator(name, score) {
 const newUser = {};
 newUser.name = name;
 newUser.score = score;
 newUser.increment = function() {
 newUser.score++;
 };
 return newUser;
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment()
```












































