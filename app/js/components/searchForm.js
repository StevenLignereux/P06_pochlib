function createSearchForm() {
    let form = document.createElement("form");
    form.setAttribute("id", "searchForm");

    // create title input
    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("placeholder", "Titre du livre");
    titleInput.setAttribute("required", "");
    form.appendChild(titleInput);

    // create author input
    let authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "authorInput");
    authorInput.setAttribute("placeholder", "Auteur du livre");
    authorInput.setAttribute("required", "");
    form.appendChild(authorInput);

    // create submit button
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.innerHTML = "Rechercher";
    form.appendChild(submitBtn);

    // add form to the HTML
    let container = document.querySelector("#content");
    container.appendChild(form);
}
