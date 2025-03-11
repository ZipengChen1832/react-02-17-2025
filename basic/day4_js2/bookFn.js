// ES5 syntax

// constructor function
function Book(name, author) {
  this.name = name;
  this.author = author;
}

// static method: for the constructor function itself
Book.sayHi = function () {
  console.log("Hi");
}

// prototype method: for the instances
Book.prototype.getSummary = function () {
  return `${this.name} was written by ${this.author}`;
};

const book1 = new Book("Harry Potter", "J.K. Rowling");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien");

// console.log(book1.getSummary === book2.getSummary);
// console.log(book1);

const books = document.getElementsByClassName("book");
console.log(books);



