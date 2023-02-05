// Remove div and clear search results
export const clearResultDiv = () => {
    const resultDiv = document.getElementById("result-div");
    resultDiv && resultDiv.remove();
}
