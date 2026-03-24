// 1. Create an array that stores books
const form = document.querySelector("form");
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
  renderBooks(myLibrary);
  console.log(myLibrary);
}

// 4. Write a function that looks through the myLibrary Array and presents them into the HTML.

function renderBooks(arr) {
  let libraryHTML = document.getElementById("myLibrary");
  libraryHTML.innerHTML = "";
  arr.forEach((book) => {
    libraryHTML.innerHTML += `
    <h2>${book.name}</h2>
    <p>Written By: ${book.author}</p>
    <p>${book.pages} Pages</p>
    `;
  });
}

// 5. Create a "New Book" button that takes in inputs so the user can input a book into the array

const newBookBtn = document.getElementById("newBook");
newBookBtn.addEventListener("click", () => {
  document.getElementById("newBookForm").showModal();
});

const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", () => {
  document.getElementById("newBookForm").close();
  form.reset();
});

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookPages = document.getElementById("bookPages").value;
  addBookToLibrary(bookTitle, bookAuthor, bookPages);
  document.getElementById("newBookForm").close();
  form.reset();
});

//6. Add a button on each book's display to remove the book from the library. You will probably need to make a "RemoveBookFunction" that takes the item out of the array.

//7. Add a button that changes a book from Unread to Read.
