document.addEventListener("DOMContentLoaded", function () {

    const cartCountEl = document.getElementById("cartCount");
    const addBtn = document.getElementById("addToCart");

    let count = localStorage.getItem("cartCount");
    count = count ? parseInt(count) : 0;

    update(count);

    if (addBtn) {
        addBtn.addEventListener("click", function () {
            count++;
            localStorage.setItem("cartCount", count);
            update(count);
        });
    }

    function update(value) {
        if (!cartCountEl) return;

        if (value > 0) {
            cartCountEl.style.display = "inline-block";
            cartCountEl.textContent = value;
        } else {
            cartCountEl.style.display = "none";
        }
    }

});
