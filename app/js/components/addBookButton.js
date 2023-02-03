
import {createSearchForm} from "./searchForm.js";

export const createAddBookButton = () => {
    const h2 = document.querySelector(".h2");

    const addBookBtn = document.createElement("button");
    addBookBtn.classList.add("button", "button--green");
    addBookBtn.innerHTML = `<span class="button__text">Ajouter un livre</span>`;
    h2.after(addBookBtn);

    addBookBtn.addEventListener("click", () => {
        let resultDiv = document.getElementById("searchForm");

        if (resultDiv){
            resultDiv.remove()
        }

        createSearchForm();
        addBookBtn.style.display = "none";

        const cancelButton = document.getElementById("cancel-button");
        cancelButton.addEventListener("click", () => {
           addBookBtn.style.display = "inline-block";
        });
    });
}


