// const form = document.querySelector("form");
// let myLibrary = [];

// function Book(name, author, pages) {
//   this.name = name;
//   this.author = author;
//   this.pages = pages;
//   this.id = 0;
//   this.read = false;
// }

// function addBookToLibrary(name, author, pages) {
//   let book = new Book(name, author, pages);
//   book.id = crypto.randomUUID();
//   myLibrary.push(book);
//   renderBooks(myLibrary);
// }

// function renderBooks(arr) {
//   let libraryHTML = document.getElementById("myLibrary");
//   libraryHTML.innerHTML = "";
//   arr.forEach((book) => {
//     libraryHTML.innerHTML += `
//     <h2>${book.name}</h2>
//     <p>Written By: ${book.author}</p>
//     <p>${book.pages} Pages</p>
//     <button onclick="removeBook('${book.id}')">Remove Book</button>
//     <button onclick="toggleReadStatus('${book.id}')">${book.read ? `Finished` : `Not Finished`}</button>

//     `;
//   });
// }

// const newBookBtn = document.getElementById("newBook");
// newBookBtn.addEventListener("click", () => {
//   document.getElementById("newBookForm").showModal();
// });

// const closeBtn = document.getElementById("closeBtn");
// closeBtn.addEventListener("click", () => {
//   document.getElementById("newBookForm").close();
//   form.reset();
// });

// const submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const bookTitle = document.getElementById("bookTitle").value;
//   const bookAuthor = document.getElementById("bookAuthor").value;
//   const bookPages = document.getElementById("bookPages").value;
//   addBookToLibrary(bookTitle, bookAuthor, bookPages);
//   document.getElementById("newBookForm").close();
//   form.reset();
// });

// function removeBook(id) {
//   let newLibrary = myLibrary.filter((book) => book.id !== id);
//   myLibrary = newLibrary;
//   renderBooks(myLibrary);
// }

// function toggleReadStatus(id) {
//   myLibrary.forEach((book) => {
//     if (book.id === id) {
//       book.read = !book.read;
//     } else {
//       return;
//     }
//   });

//   renderBooks(myLibrary);
// }
