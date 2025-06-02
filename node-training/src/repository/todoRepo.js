const shortid = require("shortid");

let todos = [
  {
    id: shortid.generate(),
    title: "Learn Node.js",
    description: "Understand the basics of Node.js",
    completed: false,
  },
];

module.exports = todos;
