import {addResultDiv} from "../functions/resultDiv.js";
import {searchBook} from "../functions/searchBook.js";
import {clearResultDiv} from "../functions/clearResults.js";


/*
    Create a form with 2 inputs (author and title). Tey have required attribut.
    There is a submit button for send the request
*/

export const createSearchForm = () => {
    const form = document.createElement("form");
    form.setAttribute("id", "searchForm");

    // create title input
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInput");
    titleInput.setAttribute("placeholder", "Titre du livre");
    titleInput.required = true;
    form.appendChild(titleInput);

    // create author input
    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "authorInput");
    authorInput.setAttribute("placeholder", "Auteur du livre");
    authorInput.required = true;
    form.appendChild(authorInput);

    // create submit button
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("button", "button--green", "button__text");
    submitBtn.id = "search-button";
    submitBtn.setAttribute("type", "submit");
    submitBtn.innerHTML = "Rechercher";
    form.appendChild(submitBtn);

    // create a cancel button
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('button', 'button--cancel');
    cancelButton.id = "cancel-button"
    cancelButton.textContent = 'Annuler';

// append cancel button to the form
    form.appendChild(cancelButton);


    // add form to the HTML
    const parent = document.querySelector("#content");
    parent.insertAdjacentElement("beforebegin", form);

    submitBtn.addEventListener("click", (evt) => {
        evt.preventDefault();
        clearResultDiv();

        if (authorInput.value !== "" && titleInput.value !== ""){
            addResultDiv();
        }

        searchBook();

    });

    // Erase result
    cancelButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        clearResultDiv();

        titleInput.value = "";
        authorInput.value = "";


        form.remove();
    });


}
