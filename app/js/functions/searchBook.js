import {addToReadingList} from "./addToReadingList.js";


export const searchBook = () => {
    // We take inputs values
    const title = document.getElementById("titleInput").value.trim();
    const author = document.getElementById("authorInput").value.trim();
    let resultDiv = document.getElementById("result-div");

    // Check if inputs are not empty
    if (!title || !author) {
        alert("Les champs de recherche ne peuvent pas être vides");
        return;
    }

    // API request
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            resultDiv.innerHTML = "";

            // check if the search have results
            if (!data.items || !data.items.length) {
                resultDiv.innerHTML = `<p>Aucun livre n'a été trouvé</p>`;
                return;
            }

            const cardContainer = document.createElement("div");
            cardContainer.setAttribute("id", "card-container");

            // We take informations for one book
            data.items.forEach((book) => {
                const id = book.id;
                const title = book.volumeInfo.title;
                const author = book.volumeInfo.authors
                    ? book.volumeInfo.authors[0]
                    : "Information manquante";
                const description = book.volumeInfo.description
                    ? book.volumeInfo.description.slice(0, 200) + "..."
                    : "Information manquante";

                let thumbnail;
                // Check if a thumbnail is available, else we take an image
                if (book.volumeInfo.imageLinks) {
                    thumbnail = book.volumeInfo.imageLinks.thumbnail;
                } else {
                    thumbnail = "./assets/images/unavailable.png";
                }

                cardContainer.innerHTML += `
                    <div class="cards">
                      <div class="result-div__book card">
                        <div class="heading"  
                             data-book-id="${id}" 
                             data-book-title="${title}"  
                             data-book-author="${author}" 
                             data-book-description="${description}" 
                             data-book-thumbnail="${thumbnail}" >
                          <h3 class="card__title">${title}</h3>
                          <i class="fa-solid fa-bookmark card__bookmark"></i>
                        </div>
                        <h3 class="card__title">${id}</h3>
                        <p class="card__author">${author}</p>
                        <p class="card__description">${description}</p>
                        <img class="card__image" 
                            data-book-thumbnail="${thumbnail}" 
                            loading="lazy" 
                            src="${thumbnail}" 
                            alt="${thumbnail}">
                      </div>
                    </div>
                  `;
            });

            resultDiv.appendChild(cardContainer);

            // Add a listener in the booksmark icon
            let bookmarks = document.getElementsByClassName('card__bookmark');
            for (let bookmark of bookmarks) {
                bookmark.addEventListener('click', addToReadingList);
            }
        });

}




