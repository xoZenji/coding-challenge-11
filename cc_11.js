// Task 1: Created Book Class
class Book {
    constructor(title, author, isbn, copies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.copies = copies;
    }
  
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
  
    updateCopies(quantity) {
      this.copies += quantity;
      if (this.copies < 0) {
        this.copies = 0;
      }
    }
  } // Created the class book and added the constructor, getDetails and updateCopies methods, then prints everything to the console.
  
  // Test Cases
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
  
  book1.updateCopies(-1);
  console.log(book1.getDetails());
  // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

  // Task 2: Created Borrower Class
  class Borrower {
    constructor(name, borrowerId, borrowedBooks) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(remove => remove !== book);
    }
}; // Created class borrower and added the constructor, borrowBook, and returnBook methods which adds and removes books from the borrowedBooks array, then prints it to the console.

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // [ 'The Great Gatsby' ]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // []

// Task 3: Created Library Class
class Library {
  constructor() {
      this.books = [];
      this.borrowers = [];
  }
  addBook(book) {
      this.books.push(book);
  }
  listBooks() {
      this.books.map(book => console.log(book.getDetails()));
  }
}; // Created class Library and added the constructor, addBook, and listBooks methods which adds books to the books array and lists the details of each book, then prints it to the console.

const library = new Library();
library.addBook(book1);
library.listBooks(); //Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"