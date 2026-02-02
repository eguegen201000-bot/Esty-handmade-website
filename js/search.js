document.addEventListener("DOMContentLoaded", function () {

    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");

    if (!searchBtn || !searchInput) {
        console.error("Search elements not found");
        return;
    }

    searchBtn.addEventListener("click", function () {
        let query = searchInput.value.toLowerCase().trim();

        if (query === "art") {
            window.location.href = "Art.html";
        } 
        else if (query === "pillow") {
            window.location.href = "Pillow.html";
        } 
        else if (query === "baby") {
            window.location.href = "Baby.html";
        } 
        else if (query === "jewelry" || query === "jewellery") {
            window.location.href = "Jewleries.html";
        } 
        else {
            alert("Category not found");
        }
    });

    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchBtn.click();
        }
    });

});

