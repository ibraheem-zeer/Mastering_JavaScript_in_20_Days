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

---
### Nested Scope

```js
var teacher = "anyt" // Red

function oc() { // Red
    var teacher = "anty"  // Blue

    function ask(qust) { // Blue
        console.log(teacher , qust)  // teacher => Blue and qust => Green
    }
    ask("why ?")
}

oc()  // output : anty why ?

ask("??")    // Reference Error

```
---

## undefined vs undeclared

- undefined : means a variable exists but it has no value
- undeclared : never formally declared in any scope that we have accessed to , don't have a marble for it

---


Q1
```ts
interface HelloWorldResponse {
    message: string;
}

interface BooleanResponse {
    result: boolean;
}

interface ReturnObjResponse {
    x: string;
    y: number;
}

type PromiseType<T> = T extends Promise<infer R> ? R : never;

const sayHelloWorld = new Promise<HelloWorldResponse>((resolve, reject) => {
    resolve({ message: "Hello world!" });
});

const checkBoolean = (boolean: boolean) =>
    new Promise<BooleanResponse>((resolve, reject) => {
        if (boolean) {
            resolve({ result: boolean });
        } else {
            reject(`Input is false :(`);
        }
    });

const returnObj = new Promise<ReturnObjResponse>((resolve, reject) => {
    resolve({
        x: "meow",
        y: 45,
    });
});

const promisesArray: Promise<unknown>[] = [sayHelloWorld, checkBoolean(true), returnObj];

const convertToObj = async <T>(array: Promise<T>[]) => {
    const obj: Record<string, PromiseType<T> | any> = {};

    await Promise.allSettled(array.map((promise, index) => promise.then(
        (value) => (obj[`result${index + 1}`] = value),
        (reason) => (obj[`error${index + 1}`] = reason)
    )));

    return obj;
};

convertToObj(promisesArray).then((result) => {
    console.log(result);
});
```

---

Q2
```js
// A)  1 , ReferenceError: b is not defined
// B)  1 , ReferenceError: b is not defined
// C)  1 , ReferenceError: b is not defined
// D)  1 , ReferenceError: b is not defined

/*
  console.log(a); will output 1, as a is accessible within the whole function due to being declared with var.

  console.log(b); will result in a ReferenceError, as b is not accessible outside the if block due to being declared with let.
  
  console.log(c); will also result in a ReferenceError, as c is not accessible outside the if block due to being declared with const
*/
```

Q3
```js
// A) undefined , ReferenceError: b is not defined
// B) undefined , ReferenceError: b is not defined
// C) undefined , ReferenceError: b is not defined
// D) undefined , ReferenceError: b is not defined

/*
    console.log(a); will output undefined because a exists within the function scope but is not assigned a value at that point.

    console.log(b); will result in a ReferenceError because b is declared with let inside an if block, and the assignment let b = 2; is not hoisted, making b inaccessible at this point.

    console.log(c); will also result in a ReferenceError because c is declared with const inside the if block, and the assignment const c = 3; is not hoisted, making c inaccessible at this point.
*/
```
---

Q4

---
A) 
[ 36, 100, 45 ]
[ 1, 2, 3 ]
[ 1, 100, 45 ]

=========================

B)
[ 36, 100, 45 ]
[ 1, 2, 3 ]
[ 1, 100, 45 ]

=========================

C)
[ 36, 100, 45 ]
[ 1, 2, 3 ]
[ 1, 100, 45 ]

=========================

D)
[ 36, 100, 45 ]
[ 1, 2, 3 ]
[ 1, 100, 45 ]


var a = 36;: The variable a is declared using var, which has function scope. It is assigned the value 36.

let b = 100;: The variable b is declared using let, which has block scope. It is assigned the value 100.

const c = 45;: The variable c is declared using const, which also has block scope. It is assigned the value 45.

console.log([a, b, c]);: This logs the initial values of a, b, and c, which are [36, 100, 45].





























