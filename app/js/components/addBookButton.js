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


    addBookBtn.addEventListener("click", () => {
        let resultDiv = document.getElementById("searchForm");

        // Remove resultDiv if already exist in order to avoid having multiple time result Div displaying
        if (resultDiv) {
            resultDiv.remove();
        }
        createSearchForm();

        // Hide and display addBookbutton
        addBookBtn.style.display = "none";


        const cancelButton = document.getElementById("cancel-button");

        cancelButton.addEventListener("click", () => {
            addBookBtn.style.display = "inline-block";
        });

    });



}


