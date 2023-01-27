// Efface la div et les résultats de recherche
export function clearResultDiv() {
    let resultDiv = document.getElementById("result-div");
    if (resultDiv) {
        resultDiv.remove();
    }
}
