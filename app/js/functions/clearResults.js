// Remove div and clear search results
export function clearResultDiv() {
    let resultDiv = document.getElementById("result-div");
    if (resultDiv) {
        resultDiv.remove();
    }
}
