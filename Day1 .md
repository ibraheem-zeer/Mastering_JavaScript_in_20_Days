# DOM
## Document Object Model
---
we can use DOM to Read and Write(Edit) on HTML from JavaScript
---
useing document we can access to HTML code 
```
// this code will return the title of page
document.title

// also we can Edit title
document.title = "New Title page"
```
---
can use .children to get elements inside the tags
```Ex:
//this code will return all elements inside the body
document.body.children
```
# **Also we can use**
- .getElementById("any") , to Select first element of its Id is **any**
- document.querySelector("#any") if id or (".any") if class , same as getElementById but has more flexibility
- document.getElementsByTagName("any") , to select all elements has the same tag name
- document.querySelectorAll("any") if tag , ("#any") if id , (".any") if class
- document.getElementsByClassName("")

---
## using above codes , we can use it to change text content or add text content
#### Examples
```
// to change text content
document.getElementById("p1-name").textContent = "Ibraheem" // the output will change to ibraheem

// to add text content
document.getElementById("p1-name").append = " Zeer" // the output will change to ibraheem Zeer
```
