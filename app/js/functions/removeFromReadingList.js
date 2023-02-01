export function removeFromReadingList(event) {
    if (event.target.classList.contains('fa-trash')) {
        let bookItem = event.target.parentNode.parentNode.parentNode;
        let bookTitle = bookItem.querySelector('.card__title').textContent;
        let books = JSON.parse(sessionStorage.getItem('books')) || [];
        books = books.filter(book => JSON.parse(book).bookTitle !== bookTitle);
        sessionStorage.setItem('books', JSON.stringify(books));
        bookItem.remove();
    }

}


