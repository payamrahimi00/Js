// By ID
let title = document.getElementById("title");

// By class
let message = document.getElementsByClassName("message")[0]; // returns HTMLCollection

// By tag name
let paragraphs = document.getElementsByTagName("p"); // returns HTMLCollection

// Modern way: querySelector (CSS selectors)
let btn = document.querySelector("#btn"); // first match
let msg = document.querySelector(".message");

// All matches
let allParagraphs = document.querySelectorAll("p"); // NodeList

// HTML Document
// <!DOCTYPE html>
// <html>
// <head>
//   <title>My Page</title>
// </head>
// <body>
//   <h1 id="title">Hello World</h1>
//   <p class="message">Welcome to my page.</p>
//   <button id="btn">Click Me</button>

//   <script src="script.js"></script>
// </body>
// </html>
