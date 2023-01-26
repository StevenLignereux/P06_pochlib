/*crée un formulaire avec deux champs de saisie pour le titre et l'auteur d'un livre. Les deux champs ont l'attribut ' +
'"required" pour s'assurer qu'ils ne sont pas vides lors de la soumission. Il y a également un bouton de soumission avec ' +
'le texte "Rechercher" pour envoyer le formulaire.*/
export function createSearchForm() {
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
    submitBtn.classList.add("button", "button--green", "button__text");
    submitBtn.setAttribute("type", "submit");
    submitBtn.innerHTML = "Rechercher";
    form.appendChild(submitBtn);

    // create a cancel button
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('button', 'button--cancel');
    cancelButton.textContent = 'Annuler';

// append cancel button to the form
    form.appendChild(cancelButton);


    // add form to the HTML
    let parent = document.querySelector("#content");
    let hr = document.querySelector("hr");
    parent.insertAdjacentElement("beforebegin", form);


}
