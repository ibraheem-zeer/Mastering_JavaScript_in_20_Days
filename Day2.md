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
  age : 22 ,
  major : "CS" ,
}
```
Objects collect multiple values together to describe more complex data
Similar to how we can point at different values using variables in our code,
objects let us point at related values using properties in the object.







































