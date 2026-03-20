// 1. Create an array that stores books

const myLibrary = [];

// 2. Create a constructor that creates book object.

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.id = 0;
}
// 3. Create a function that takes in parameters that uses the book constructor and has an unique id

function addBookToLibrary(name, author, pages) {
  let book = new Book(name, author, pages);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
}

addBookToLibrary("Bible", "God", 454);
addBookToLibrary("Bible", "God", 454);
addBookToLibrary("Bible", "God", 454);
addBookToLibrary("Bible", "God", 454);

// 4. Write a function that looks through the myLibrary Array and presents them into the HTML.

function renderBooks(arr) {
  const libraryHTML = document.getElementById("myLibrary");
  arr.forEach((book) => {
    libraryHTML.innerText += book.name;
  });
}

renderBooks(myLibrary);

// 5. Create a "New Book" button that takes in inputs so the user can input a book into the array

//6. Add a button on each book's display to remove the book from the library. You will probably need to make a "RemoveBookFunction" that takes the item out of the array.

//7. Add a button that changes a book from Unread to Read.
