import {removeFromReadingList} from "./removeFromReadingList.js";

export function displayBooks() {
    // Récupération des livres stockés en session
    let booksList = JSON.parse(sessionStorage.getItem("books")) || [];

    // Can be added inside function ( clearContentBookmark )
    let readingList = document.getElementById("content");
    while (readingList.children.length > 1) {
        readingList.removeChild(readingList.lastChild);
    }

    // Boucle pour afficher tous les livres stockés
    for (let i = 0; i < booksList.length; i++) {
        let book = JSON.parse(booksList[i]);

        // Création de l'élément HTML représentant le livre dans la poch'liste
        let bookItem = document.createElement("div");
        bookItem.classList.add("reading-list__book");

        bookItem.innerHTML = `
        <div id="card-container">
            <div class="cards">
                <div class="result-div__book card">
                    <div class="heading">
                        <h3 class="card__title">${book.bookTitle}</h3>
                        <i class="fa-solid fa-trash card__bookmark" id="trash"></i>
                    </div>
                    <h3 class="card__title">${book.bookId}</h3>
                    <p class="card__author">${book.bookAuthor}</p>
                    <p class="card__description">${book.bookDescription}</p>
                    <img
                        class="card__image"
                        data-book-thumbnail="${book.bookThumbnail}"
                        src="${book.bookThumbnail}"
                        alt="${book.bookThumbnail}" />
                </div>
            </div>
        </div>
    `;

        // Ajout de l'élément à la poch'liste
        let readingList = document.getElementById("content");
        readingList.appendChild(bookItem);
    }


    document.addEventListener('click', removeFromReadingList);

}
