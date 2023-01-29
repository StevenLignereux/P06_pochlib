import {createAddBookButton} from "./components/addBookButton.js";

document.addEventListener("DOMContentLoaded", createAddBookButton);

// Au chargement de la page
window.onload = () => {

    // Vérifier si l'objet "books" existe dans le sessionStorage
    let books = JSON.parse(sessionStorage.getItem("books")) || [];
    if (books.length > 0) {
        // Récupérer les livres stockés et les afficher dans la liste de lecture
        for (let i = 0; i < books.length; i++) {
            let book = JSON.parse(books[i]);
            console.log(book);

            // Création de l'élément HTML représentant le livre dans la poch'liste
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
            let readingList = document.getElementById('content');
            readingList.appendChild(bookItem);
        }
    }
}


