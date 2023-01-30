import {createAddBookButton} from "./components/addBookButton.js";

document.addEventListener("DOMContentLoaded", () => {
    createAddBookButton();

    // Récupérer les livres stockés en session
    let books = JSON.parse(sessionStorage.getItem("books")) || [];

    // Vérifier s'il y a des livres dans la liste de lecture
    if (books.length > 0) {
        // Boucle pour afficher tous les livres stockés
        for (let i = 0; i < books.length; i++) {
            let book = JSON.parse(books[i]);

            // Création de l'élément HTML représentant le livre dans la liste de lecture
            let bookItem = document.createElement('div');
            bookItem.classList.add('reading-list__book');
            bookItem.innerHTML = `
            <div class="result-div__book card">
                <div class="heading">
                    <h3 class="card__title">${book.bookTitle}</h3>
                    <i class="fa-solid fa-trash card__bookmark"></i>
                </div>
                <h3 class="card__title" >${book.bookId}</h3>
                <p class="card__author" >${book.bookAuthor}</p>
                <p class="card__description">${book.bookDescription}</p>
                <img class="card__image" data-book-thumbnail="${book.bookThumbnail}" src="${book.bookThumbnail}" alt="${book.bookThumbnail}">
            </div>`;

            // Ajout de l'élément à la liste de lecture
            let readingList = document.getElementById('content');
            readingList.appendChild(bookItem);
        }
    }
});
