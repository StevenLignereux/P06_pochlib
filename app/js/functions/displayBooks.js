import {removeFromReadingList} from "./removeFromReadingList.js";
import {cardComponent} from "../components/cardComponent.js";

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

        bookItem.innerHTML += cardComponent(
            id,
            title,
            author,
            description,
            thumbnail,
            false);
    }

    // Add element to the poch list
    readingList.appendChild(bookItem);
    document.addEventListener('click', removeFromReadingList);

}
