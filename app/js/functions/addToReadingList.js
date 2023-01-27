export function addToReadingList(event) {
    // Récupération des données du livre
    let bookData = event.target.parentElement.dataset;
    console.log(bookData)

    // Création de l'élément HTML représentant le livre dans la poch'liste
    let bookItem = document.createElement('div');
    bookItem.classList.add('reading-list__book');

    bookItem.innerHTML = `
        <div class="result-div__book card">
            <div class="heading">
                <h3 class="card__title">${bookData.bookTitle}</h3>
                <i class="fa-regular fa-bookmark card__bookmark"></i>
            </div>
            <h3 class="card__title" >${bookData.bookId}</h3>
            <p class="card__author" >${bookData.bookAuthor}</p>
            <p class="card__description">${bookData.bookDescription}</p>
            <img class="card__image" data-book-thumbnail="${bookData.bookThumbnail}" src="${bookData.bookThumbnail}" alt="${bookData.bookThumbnail}">
        </div>`;

    // Ajout de l'élément à la poch'liste
    let readingList = document.getElementById('content');
    readingList.appendChild(bookItem);
}

