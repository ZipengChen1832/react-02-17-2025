// in ES6, class syntax is introduced as an alternative to constructor functions.
// it's a syntax sugar, more welcoming to developers from other languages.

class Book {
  // static methods are for the class itself
  static sayHi() {
    console.log("Hi");
  }

  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  // prototype methods for instances
  getSummary() {
    return `${this.name} was written by ${this.author}`;
  }
}

const book1 = new Book("Harry Potter", "J.K. Rowling");
const book2 = new Book("The Hobbit", "J.R.R. Tolkien");

console.log(book1.getSummary());
