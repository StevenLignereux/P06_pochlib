export function addToReadingList(event) {
    // Récupération des données du livre
    let bookData = event.target.parentElement.dataset;
    console.log(bookData)

    // Création de l'élément HTML représentant le livre dans la poch'liste
    let bookItem = document.createElement('div');
    bookItem.classList.add('reading-list__book');
    bookItem.innerHTML = `<h3>${bookData.bookTitle}</h3>
                        <p>Auteur : ${bookData.bookAuthor}</p>
                        <p>${bookData.bookDescription}</p>
                        <div>${bookData.bookThumbnail}</div>`;

    // Ajout de l'élément à la poch'liste
    let readingList = document.getElementById('content');
    readingList.appendChild(bookItem);
}

