# Static Typing

## TypeScript, Flow, and type-aware linting

Benefits:
1. Catch type-related mistakes
2. Communicate type intent
3. Provide IDE feedback
---
Caveats:
1. Inferencing is best-guess, not a sguarantee
2. Annotations are optional
3. Any part of the application that
isn't typed introduces uncertainty

```typescript
var name = "ibraheem"

name = {age : 22}  // Error : can't assign object to string
```

### custom types
```typescript
type std = {name : string}

function getName(stdRec:std : string){
  return stdRec.name
}

var fStd:student = {name : "ibraheem"}

var fStdName:string = getName(fStd)

//==============================================

var stdName:string = "ibraheem"

var stdCount:number = 16 - stdName  // error : can't substract string
```
what can `Typescript` do
- They make types more obvious in code
- look like other language's type systems
- Extremely popular these days
- very sophisticated and good at what they do
- use "non-JS-standard" syntax
- require build process, which raises the barrier to entry
- sophistication can be intimidating to those without prior formal types experience
- focus more on "static types" than value types
- only way to have confidence over the runtime behavior is to limit/eliminate dynamic typing
---

# Scope
```js
// we gonna make a plan for a bucket and make a plan for a marble

var teacher = "Khaldoon"  // Red marble

function otherClass() {   // Red marble
  var teacher = "Khaled"  // Blue marble
  console.log("Welcom")
}

function ask() {          // Red marble
  var question = "why?"   // Green marble
  console.log(question)   // Green marble
}

otherClass();    //output = Welcome!
ask()            //output = why?
```
*Note* :  when we execute the code there's no more declarations for anything , All var's are gone essentially , because we don't need to declare anyting anymore , we already know what that's gonna do 

---

## Dynamic Global Variables 
```js
var teacher = "Kaldoon"

function otherClass() {
  teacher = "Khalid"
  topic = "AWS"           //Reference Error
  console.log("Welcom")
}
otherClass();
/*
what is gonna happen with (topic) variable

go to the global scope ,
if looking for this marble called topic ,
ever heard of it , and Global scope instead of saying nope , error
*/
```



































