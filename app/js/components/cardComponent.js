export const cardComponent = (id, title, author, description, thumbnail, isSearch) => {

    if (isSearch) {
        return `
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
                <p class="card__author" >${author}</p>
                <p class="card__description">${description}</p>
                <img class="card__image"
                 data-book-thumbnail="${thumbnail}" 
                loading="lazy" src="${thumbnail}" 
                alt="${thumbnail}">
            </div>
        </div>`;
    }
    return `
    <div class="cards">
        <div class="result-div__book card">
            <div class="heading"  
            data-book-id="${id}" 
            data-book-title="${title}"  
            data-book-author="${author}" 
            data-book-description="${description}" 
            data-book-thumbnail="${thumbnail}" >
                <h3 class="card__title">${title}</h3>
                <i class="fa-solid  fa-trash card__bookmark" id="trash""></i>
            </div>
            <h3 class="card__title" >${id}</h3>
            <p class="card__author" >${author}</p>
            <p class="card__description">${description}</p>
            <img class="card__image"
             data-book-thumbnail="${thumbnail}" 
            loading="lazy" src="${thumbnail}" 
            alt="${thumbnail}">
        </div>
    </div>`;

}