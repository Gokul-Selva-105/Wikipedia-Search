function searchWikipedia() {
  const searchInput = document.getElementById("searchInput").value;
  if (!searchInput) {
    alert("Please enter a search query.");
    return;
  }
  const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searchInput}&origin=*`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displaySearchResults(data.query.search);
    })
    .catch((error) => {
      console.error("Error searching Wikipedia:", error);
      alert("Error searching Wikipedia. Please try again.");
    });
}
function displaySearchResults(results) {
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";
  if (results.length === 0) {
    searchResultsContainer.innerHTML = "No results found.";
    return;
  }
  results.forEach((result) => {
    const resultElement = document.createElement("div");
    resultElement.classList.add("result-item");
    resultElement.innerHTML = `
        <h3>${result.title}</h3>
        <p>${result.snippet}</p>
        <a href="https://en.wikipedia.org/wiki/${result.title}" target="_blank">Read more</a>
      `;
    searchResultsContainer.appendChild(resultElement);
  });
}
