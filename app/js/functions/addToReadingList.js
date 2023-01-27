export function addToReadingList(event) {
    // Récupération des données du livre
    let bookData = event.target.parentElement.dataset;

    // Création de l'élément HTML représentant le livre dans la poch'liste
    let bookItem = document.createElement('div');
    bookItem.classList.add('reading-list__book');
    bookItem.innerHTML = `<h3>${bookData.title}</h3>
                        <p>Auteur : ${bookData.author}</p>
                        <p>${bookData.description}</p>`;

    // Ajout de l'élément à la poch'liste
    let readingList = document.getElementById('content');
    readingList.appendChild(bookItem);
}

// Attachement de l'écouteur d'événement sur les icônes bookmark
let bookmarks = document.getElementsByClassName('card__bookmark');
for (let bookmark of bookmarks) {
    bookmark.addEventListener('click', addToReadingList);
}
