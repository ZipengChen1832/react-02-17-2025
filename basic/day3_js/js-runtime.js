// difference between browser javascript and node.js
// 1. browser javascript
// - runs in browser
// - can manipulate the DOM
// - have access to the Web APIs
// 2. node.js
// - runs on the local machine
// - doesn't have access to the web APIs (e.g. DOM)
// - can access the file system and some other modules



console.log("hello");

const fs = require("fs");

fs.readFile("index.html", "utf8", (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
});

// const title = document.querySelector(".title");
// title.textContent = "Hello from JS!";
// console.log(title.textContent);



