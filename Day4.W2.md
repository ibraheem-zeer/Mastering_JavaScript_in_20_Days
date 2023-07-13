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
```javascript
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
---
### Using the prototype chain
Store the increment function in just one object and have the interpreter, if it doesn't find the function on user1, look up to that object to check if it's there Link user1 and functionStore so the interpreter, on not finding .increment, makes sure to check up in functionStore where it would find it
```javascript
function userCreator (name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function(){this.score++;},
 login: function(){console.log("Logged in");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

// if we want to confirm our user1 has the property score

function userCreator (name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function(){this.score++;},
 login: function(){console.log("Logged in");}
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.hasOwnProperty('score') 
```
All objects have a __proto__ property by default which defaults to linking to a big object - Object.prototype full of (somewhat) useful functions

```javascript
// Declaring & calling a new function inside our ‘method’ increment
function userCreator(name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function() {
 this.score++;
 }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

//=========================================================================

// Create and invoke a new function (add1) inside increment
function userCreator(name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function() {
 function add1(){ this.score++; }
 add1()
 }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();

//=========================================================================

// Arrow function override the normal this rules
function userCreator(name, score) {
 const newUser = Object.create(userFunctionStore);
 newUser.name = name;
 newUser.score = score;
 return newUser;
};
const userFunctionStore = {
 increment: function() {
 const add1 = () => { this.score++; }
 add1()
 }
};
const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```
---
### Using new
When we call the function that returns an object with new in front we automate 2 things
1. Create a new user object
2. Return the new user object

```javascript
function userCreator(name, score) {
 this.name = name;
 this.score = score;
};
userCreator.prototype // {Object};
userCreator.prototype.increment = function(){
this.score++;
}
const user1 = new userCreator("Will", 3);

//=================================================

// The new keyword automates a lot of our manual work
function userCreator(name, score){
 this.name = name;
 this.score = score;
}
userCreator.prototype.increment = function(){ this.score++; };
userCreator.prototype.login = function(){ console.log("login"); };
const user1 = new userCreator(“Eva”, 9)
user1.increment()
```
- Benefits:
  + Faster to write. Often used in practice in professional code
- Problems:
  + 95% of developers have no idea how it works and therefore fail interviews We have to upper case first letter of the function so we know it requires ‘new’ to work!
---
### Classes
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes
```javascript
class UserCreator {
 constructor (name, score){
 this.name = name;
 this.score = score;
 }
 increment (){ this.score++; }
 login (){ console.log("login"); }
}
const user1 = new UserCreator("Eva", 9);
user1.increment();
```
- Benefits:
  + Emerging as a new standard
  + Feels more like style of other languages
- Problems:
  + 99% of developers have no idea how it works and therefore fail interviews But you will not be one of them!



































