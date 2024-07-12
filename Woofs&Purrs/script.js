function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const content = document.querySelectorAll('#main > div > div');
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';

    let resultsFound = false;
    content.forEach((item) => {
        if (item.innerText.toLowerCase().includes(query)) {
        resultsFound = true;
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = item.innerHTML;
        resultsDiv.appendChild(resultItem);
        }
    });

    if (!resultsFound) {
        resultsDiv.innerHTML = '<p>No results found</p>';
    }
    }

    document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    performSearch();
    });  

/* For read-more function*/

// function toggleReadMore() {
//     var moreContent = document.getElementById("more-content");
//     var readMore = document.querySelector(".read-more");
//     if (moreContent.style.display === "none" || moreContent.style.display === "") {
//         moreContent.style.display = "block";
//         readMore.textContent = "Read Less...";
//     } else {
//         moreContent.style.display = "none";
//         readMore.textContent = "Read More...";
//     }
// }