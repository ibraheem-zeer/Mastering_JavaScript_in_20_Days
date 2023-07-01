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
