import {removeFromReadingList} from "./removeFromReadingList.js";

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

        bookItem.innerHTML += `
             <div class="cards">
                <div class="result-div__book card">
                    <div class="heading">
                        <h3 class="card__title">${parsedBook.bookTitle}</h3>
                         <i class="fa-solid fa-trash card__bookmark" id="trash"></i>
                    </div>
                    <h3 class="card__title">${parsedBook.bookId}</h3>
                    <p class="card__author">${parsedBook.bookAuthor}</p>
                    <p class="card__description">${parsedBook.bookDescription}</p>
                    <img class="card__image" data-book-thumbnail="${parsedBook.bookThumbnail}" loading="lazy" src="${parsedBook.bookThumbnail}" alt="${parsedBook.bookThumbnail}">
                </div>
            </div>
    `;

    }

    // Add element to the poch list
    readingList.appendChild(bookItem);
    readingList.addEventListener('click', removeFromReadingList);

}
