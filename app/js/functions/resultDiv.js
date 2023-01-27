
// Créer une div pour afficher les résultats
export function addResultDiv() {
    const form = document.getElementById("searchForm");
    const resultDiv = document.createElement("div");


    resultDiv.id = "result-div";
    resultDiv.className = "search-result";

    const hr = document.createElement("hr");
    resultDiv.appendChild(hr);

    const h2 = document.createElement("h2");
    h2.innerText = "Résultats de recherche";
    resultDiv.appendChild(h2);

    form.parentNode.insertBefore(resultDiv, form.nextSibling);
}
