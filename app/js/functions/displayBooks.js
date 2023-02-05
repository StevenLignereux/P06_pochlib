import {removeFromReadingList} from "./removeFromReadingList.js";
import {cardComponent} from "../components/cardComponent.js";

export const displayBooks = () => {
    // We take books in session
    let booksList = JSON.parse(sessionStorage.getItem("books")) || [];


    // Can be added inside function ( clearContentBookmark )
    let readingList = document.getElementById("content");
    while (readingList.children.length > 1) {
        readingList.removeChild(readingList.lastChild);
    }

    let bookItem = document.createElement("div");
    bookItem.setAttribute("id", "card-container")

    // Display books store in session
    for (const book of booksList) {
        let parsedBook = JSON.parse(book);

        // Html element create for displaying books

        bookItem.innerHTML += cardComponent(
            parsedBook.bookId,
            parsedBook.bookTitle,
            parsedBook.bookAuthor,
            parsedBook.bookDescription,
            parsedBook.bookThumbnail,
            false
        );

    }

    // Add element to the poch list
    readingList.appendChild(bookItem);
    readingList.addEventListener('click', removeFromReadingList);

}
