import {displayBooks} from "./displayBooks.js";

export const addToReadingList = (event) => {
    // We get book datas
    const bookData = event.target.parentElement.dataset;
    const book = JSON.stringify(bookData);

    // Session storage
    let books = JSON.parse(sessionStorage.getItem("books")) || [];

    if (books.some((b) => JSON.parse(b).bookId === bookData.bookId)) {
        // display an error message when the book is in the list
        alert("Vous ne pouvez ajouter deux fois le même livre");
        return;
    }

    books.push(book);
    sessionStorage.setItem("books", JSON.stringify(books));

    displayBooks();
};
