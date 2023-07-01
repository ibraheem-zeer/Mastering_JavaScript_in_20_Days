# Expressions

## Variables
```
let remember = "sept. 21";
const fname = "ibraheem";
//=================================

let fname;
fname = "ibraheem"

const lname;
lname = "zeer"; // Error

// use toUpperCase() , toLowerCase()
fname.toUpperCase() // output = IBRAHEEM
fname.toLowerCase() // output = ibraheem
```
- The let declaration declares a block-scoped local variable, optionally initializing it to a value.
- The const declares & assigns a "constant" aka a variable that can't be changed
---
### Variables Names
- firstName
- also_valid_but_less_common
- Oddbut_Technicallyfine2
- <s>0chanceThisWillWork!</s>
---
> best choice is camelCase
---
**What really are variables though?** , variables point to values
---
```
let fname = "ibraheem"
let name = fname;
console.log(fname)  // output = ibraheem
console.log(name)   // output = ibraheem
fname = "zeer";
console.log(fname)  // output = zeer
console.log(name)   // output = ibraheem
```

**Summary** , i learned what is variables and what is difference between let and const , understand how it work and what it can do

---

# Arrays

> keep multiple values together in a single collection

```
let programmingLang = ["C++" , "C#" , "Swift" , "Kotlin" , "JavsScript" , "TypeScript" , "Java" , "PHP" , "Dart"];

// some properties

// lingth , indexOf() , includes()
programmingLang.length; // output = 9
programmingLang[2]; // output = Swift
programmingLang.indexOf("C#") // output = 1
programmingLang.includes("PHP") // output = true

//==================================================
// pop() and push()
let lastItem = programmingLang.pop()
console.log(lastItem) // output = Dart;
console.log(programmingLang) // output = same array but without Dart element
programmingLang.push("HTML")
console.log(programmingLang) // output = ["C++" , "C#" , "Swift" , "Kotlin" , "JavsScript" , "TypeScript" , "Java" , "PHP" , "HTML"];

//==================================================
// sort()
let unSorted = ['e' , 'f' , 'b' , 'd' , 'c' , 'a'] ;
unSorted.sort() // output = ['a' , 'b' , 'c' , 'd' , 'e' , 'f'];

//==================================================
// join()
let arrName = ["ibraheem" , "hisham" , "mohammad" , "al zeer" , "al husaini"];
arrName.join(" ") // output = 'ibraheem hisham mohammad al zeer al husaini'

//==================================================
// concat()
let toFive = [1,2,3,4,5]
let toTen = [6,7,8,9,10]
toFive.concat(toTen) // output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


---

### different between Mutable and immutable
- Mutable data can be edited
- Immutable data always stays the same

```
let numbers1 = [1, 2, 3];
let result1 = numbers1.push(4);
numbers1; // output = [1, 2, 3, 4]

//=============================================

let numbers2 = [1, 2, 3];
let result2 = numbers2.concat([4]);
numbers2; // output = [1, 2, 3]
```

---
# Objects

```
const Person = {
  fname : "ibraheem",
  lname : "zeer",
  birthOfYear : 2001 ,
  major : "CS" ,
  country : "Palestine" ,
  ProgrammingLanguages : ["Java" , "PHP" , "Swift" , "Kotlin" , "JS" , "HTML" , "CSS" , "C++" ],
  frinds : [{name : "Hamza" , age : 21} , {name : "Marwan" , age : 22} , {name : "Husam" , age : 20}],
  fullName : function() {
    console.log(this.fname , this.lname)
  }
}

console.log(Person.fname , Person.lname) // out = ibraheem zeer
console.log(Person.age) // out = 2001
console.log(Person.major) // out = CS
Person.fullName() // out = ibraheem zeer


//================================================================================

const indecisive = {
    lunch: "sandwich"
};
indecisive.lunch = "tacos";
indecisive.snack = "chips";

indecisive.lunch // out = tacos
indecisive.snack // out = chips
```

### Math built-in objects
```
let randomNumber = Math.random();
const pi = Math.PI;
const five = Math.abs(-5);
```


Objects collect multiple values together to describe more complex data
Similar to how we can point at different values using variables in our code,
objects let us point at related values using properties in the object.


---

## Answer to Questions**

Q1
```
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");
```
---
Q2
```
function forecast(arr) {
  // Only change code below this line
  return arr.slice(2, 4);
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```
---
Q3
```
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning' , ...fragment , 'is' , 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());
```



































