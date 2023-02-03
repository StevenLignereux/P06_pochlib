import {removeFromReadingList} from "./removeFromReadingList.js";

export function displayBooks() {
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
    for (let i = 0; i < booksList.length; i++) {
        let book = JSON.parse(booksList[i]);

        // Html element create for displaying books

        bookItem.innerHTML += `
             <div class="cards">
                <div class="result-div__book card">
                    <div class="heading">
                        <h3 class="card__title">${book.bookTitle}</h3>
                         <i class="fa-solid fa-trash card__bookmark" id="trash"></i>
                    </div>
                    <h3 class="card__title">${book.bookId}</h3>
                    <p class="card__author">${book.bookAuthor}</p>
                    <p class="card__description">${book.bookDescription}</p>
                    <img class="card__image" data-book-thumbnail="${book.bookThumbnail}" loading="lazy" src="${book.bookThumbnail}" alt="${book.bookThumbnail}">
                </div>
            </div>
    `;

    }

    // Add element to the poch list
    readingList.appendChild(bookItem);
    document.addEventListener('click', removeFromReadingList);

}
