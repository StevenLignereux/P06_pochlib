// Ici, j'utilise les fonctions fléchées pour définir la fonction createAddBookButton et pour l'écouteur d'événement click, et const pour déclarer les variables.

import {createSearchForm} from "./searchForm.js";

export function createAddBookButton() {
    let btn = document.createElement("button");
    btn.classList.add("button", "button--green");
    btn.innerHTML = '<span class="button__text">Ajouter un livre</span>';
    let h2 = document.querySelector(".h2");
    h2.parentNode.insertBefore(btn, h2.nextSibling);

    /*lorsque l'utilisateur clique sur le bouton "Ajouter un livre", la fonction createSearchForm sera appelée pour afficher ' +
    'le formulaire de recherche de livre.*/
    const addBookBtn = document.querySelector('.button--green');

    let displayForm = false;

    addBookBtn.addEventListener("click", function () {
        if (displayForm !== true) {
            createSearchForm();
            displayForm = true;
        }
    });
}


