import {addToReadingList} from "./addToReadingList.js";



export function searchAPI() {
    // Récupération des valeurs des champs de recherche
    const title = document.getElementById('titleInput').value;
    const author = document.getElementById('authorInput').value;
    let resultDiv = document.getElementById("result-div");


    // Vérification que les champs de recherche ne sont pas vides
    if (title === "" || author === "") {
        alert("Les champs de recherche ne peuvent pas être vides");
        return;
    }

    // Requête à l'API de Google Books
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Vérification que la recherche a retourné des résultats
            if (!data.items) {
                resultDiv.innerHTML = `<p>Aucun livre n'a été trouvé</p>`;
                return;
            }

            for (let i = 0; i < data.items.length; i++) {

                const book = data.items[i];
                const id = book.id;
                const title = book.volumeInfo.title;
                const author = book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Information manquante";
                const description = book.volumeInfo.description ? book.volumeInfo.description.slice(0, 200) + "..." : "Information manquante";
                let thumbnail = "";
                if (book.volumeInfo.imageLinks) {
                    thumbnail = book.volumeInfo.imageLinks.thumbnail;
                } else {
                    thumbnail = "../../../assets/images/unavailable.png";
                }
                resultDiv.innerHTML += `
                    <div class="result-div__book card">
                        <div class="heading"  data-book-id="${id}" data-book-title="${title}"  data-book-author="${author}" data-book-description="${description}" data-book-thumbnail="${thumbnail}" >
                            <h3 class="card__title">${title}</h3>
                            <i class="fa-solid fa-bookmark card__bookmark"></i>
                        </div>
                        <h3 class="card__title" >${id}</h3>
                        <p class="card__author" >${author}</p>
                        <p class="card__description">${description}</p>
                        <img class="card__image" data-book-thumbnail="${thumbnail}" src="${thumbnail}" alt="${thumbnail}">
                    </div>
                `;



                // Attachement de l'écouteur d'événement sur les icônes bookmark
                let bookmarks = document.getElementsByClassName('card__bookmark');
                for (let bookmark of bookmarks) {
                    bookmark.addEventListener('click', addToReadingList);
                }
            }

        });

}




