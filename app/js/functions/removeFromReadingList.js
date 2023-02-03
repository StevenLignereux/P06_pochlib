export const removeFromReadingList = (event) => {
    if (!event.target.classList.contains('fa-trash')) {
        return;
    }

    const bookItem = event.target.parentNode.parentNode.parentNode;
    const bookTitle = bookItem.querySelector('.card__title').textContent;
    let books = JSON.parse(sessionStorage.getItem('books')) || [];

    books = books.filter(book => {
        const {bookTitle: title} = JSON.parse(book);
        return title !== bookTitle;
    });

    sessionStorage.setItem('books', JSON.stringify(books));
    bookItem.remove();
};
