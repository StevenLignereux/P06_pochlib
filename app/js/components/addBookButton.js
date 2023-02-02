
import {createSearchForm} from "./searchForm.js";

export function createAddBookButton() {
    let btn = document.createElement("button");
    btn.classList.add("button", "button--green");
    btn.innerHTML = '<span class="button__text">Ajouter un livre</span>';
    let h2 = document.querySelector(".h2");
    h2.parentNode.insertBefore(btn, h2.nextSibling);


    // When user click on the add book button, createSearchForm function be call for display search form
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


