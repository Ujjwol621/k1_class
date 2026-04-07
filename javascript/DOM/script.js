//DOM - Document Object Model
// it is a programming interface for HTML and XML documents. 
// It represents the page so that programs can change the document structure, 
// style, and content. The DOM represents the document as nodes and objects; 
// that way, programming languages can interact with the page.

// V8-JavaScript engine is used in Google Chrome and Node.js to execute JavaScript code.
// document = {
//     html: {
//         head: {
//             title: "DOM"
//         },
//         body: {
//             div: "This is DOM class",
//             script: "script.js"
//         }
//     }
// }

// console.log("This is DOM class")
// console.log(document)

//Selector in js
//class, ID, tagname, query
// let tags = document.getElementsByTagName("h1")
// console.log(tags)
// console.log(tags[0].textContent)
// console.log(tags[1].textContent)

// let divs = document.getElementsByClassName("box")
// console.log(divs)
// console.log(divs[0].textContent)
// console.log(divs[1].textContent)

// let ids = document.getElementById("1")
// console.log(ids)
// console.log(ids.textContent)

// let tags = document.querySelector(".box") // it will select the first element with the class "box"
// console.log(tags)


// let tags = document.querySelectorAll(".box") // it will select all the elements with the class "box" and return a NodeList
// console.log(tags)
// console.log(tags[0].textContent)
// console.log(tags[1].textContent)

// let tags = document.querySelector("#first") // it will select the element with the id "1"
// console.log(tags)
// console.log(tags.textContent)

// let tags = document.querySelectorAll("#first") // it will select all the elements with the id "first" and return a NodeList
// console.log(tags)

// let tags = document.querySelector("#first") // it will select the element with the id "1"
// console.log(tags.innerHTML) // it will return the HTML content of the element with the id "1"
// console.log(tags.textContent) // it will return the text content of the element with the id "1" and ignore the HTML tags

// Updating the content of the element with the id "1"
// tags.textContent = "updated" // it will change the text content of the element with the id "1" to "This is HTML and CSS class"
// console.log(tags.textContent)
// tags.innerHTML = "<h1>updated</h1>" // it will change the HTML content of the element with the id "1" to "<h1>This is HTML and CSS class</h1>"
// console.log(tags.innerHTML)

let empty = document.querySelector(".empty")
console.log(empty.textContent)
let h1 = document.createElement("h1") // it will create a new h1 element
h1.textContent = "This is a new h1 element" // it will set the text content of the h1 element to "This is a new h1 element"
empty.appendChild(h1) // it will append the h1 element as a child of the empty div
console.log(empty.textContent)

// empty.style.border = "1px solid red" // it will add a red border to the empty div
// empty.style.padding = "10px" // it will add a padding of 10px to the empty div
// empty.style.backgroundColor = "lightblue" // it will change the background color of the empty div to light blue
// empty.style.color = "red" // it will change the text color of the empty div to red
// empty.style.fontSize = "20px" // it will change the font size of the empty div to 20px
// empty.style.width = "300px" // it will change the width of the empty div to 300px
// empty.style.height = "200px" // it will change the height of the empty div to 200px
// empty.style.margin = "0 auto" // it will center the empty div horizontally


empty.classList.add("Js-class")
// empty.classList.remove("Js-class")
console.log(empty.classList)

