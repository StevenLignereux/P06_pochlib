import {addToReadingList} from "./addToReadingList.js";


export function searchAPI() {
    // We take inputs values
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    let resultDiv = document.getElementById("result-div");


    // Check if inputs are not empties
    if (title === "" || author === "") {
        alert("Les champs de recherche ne peuvent pas être vides");
    } else {
        // API request
        const url = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // check if the search have results
                if (!data.items) {
                    resultDiv.innerHTML = `<p>Aucun livre n'a été trouvé</p>`;
                    return;
                }
                const newDiv = document.createElement("div");
                newDiv.setAttribute("id", "card-container");

                // We take informations for one book
                for (let i = 0; i < data.items.length; i++) {

                    const book = data.items[i];
                    const id = book.id;
                    const title = book.volumeInfo.title;
                    const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Information manquante";
                    const description = book.volumeInfo.description ? book.volumeInfo.description.slice(0, 200) + "..." : "Information manquante";

                    let thumbnail = "";
                    // Check if a thubnail is available, else we take an image
                    if (book.volumeInfo.imageLinks) {
                        thumbnail = book.volumeInfo.imageLinks.thumbnail;
                    } else {
                        thumbnail = "./assets/images/unavailable.png";
                    }


                    newDiv.innerHTML += `
                        <div class="cards">
                            <div class="result-div__book card">
                                <div class="heading"  data-book-id="${id}" data-book-title="${title}"  data-book-author="${author}" data-book-description="${description}" data-book-thumbnail="${thumbnail}" >
                                    <h3 class="card__title">${title}</h3>
                                    <i class="fa-solid fa-bookmark card__bookmark"></i>
                                </div>
                                <h3 class="card__title" >${id}</h3>
                                <p class="card__author" >${author}</p>
                                <p class="card__description">${description}</p>
                                <img class="card__image" data-book-thumbnail="${thumbnail}" loading="lazy" src="${thumbnail}" alt="${thumbnail}">
                            </div>
                        </div>
                `;
                }
                resultDiv.appendChild(newDiv);

                // Add a litener in the booksmark icon
                let bookmarks = document.getElementsByClassName('card__bookmark');
                for (let bookmark of bookmarks) {
                    bookmark.addEventListener('click', addToReadingList);
                }

            });
    }

}




