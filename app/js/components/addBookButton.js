// Ici, j'utilise les fonctions fléchées pour définir la fonction createAddBookButton et pour l'écouteur d'événement click, et const pour déclarer les variables.

export function createAddBookButton() {
    let btn = document.createElement("button");
    btn.classList.add("button", "button--green");
    btn.innerHTML = '<span class="button__text">Ajouter un livre</span>';
    let h2 = document.querySelector(".h2");
    h2.parentNode.insertBefore(btn, h2.nextSibling);
}
