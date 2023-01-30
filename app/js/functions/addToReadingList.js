import {displayBooks} from "./displayBooks.js";

export function addToReadingList(event) {
    // Récupération des données du livre
    let bookData = event.target.parentElement.dataset;
    let book = JSON.stringify(bookData);

    // Stockage en session
    let books = JSON.parse(sessionStorage.getItem("books")) || [];

    if (books.some(b => JSON.parse(b).bookId === bookData.bookId)) {
        // Afficher un message d'erreur si le livre a déjà été ajouté
        alert("Vous ne pouvez ajouter deux fois le même livre");
        return;
    }

    books.push(book);
    sessionStorage.setItem("books", JSON.stringify(books));

    displayBooks();
}
