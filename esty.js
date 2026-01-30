// Form submission
const form = document.getElementById('loginForm');
form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const staySignedIn = document.getElementById('staySignedIn').checked;

  alert(`Email: ${email}\nPassword: ${password}\nStay signed in: ${staySignedIn}`);
});

// Register button
document.getElementById('registerBtn').addEventListener('click', function() {
  alert('Redirecting to registration page...');
});

// Google button
document.getElementById('googleBtn').addEventListener('click', function() {
  alert('Signing in with Google...');
});

// Facebook button
document.getElementById('facebookBtn').addEventListener('click', function() {
  alert('Signing in with Facebook...');
});


/* //for pillow//
 document.addEventListener("DOMContentLoaded", () => {
    const addToCartBtn = document.getElementById("addToCart");
    const sizeSelect = document.getElementById("sizeSelect");

    addToCartBtn.addEventListener("click", () => {
      const selectedSize = sizeSelect.value;

      if (selectedSize === "select an option") {
        alert("Please select a size!");
        return;
      } */

   /*    // Product info
      const product = {
        name: "Handmade Corduroy Pillow",
        price: 18.30,
        size: selectedSize
      };

      // Get cart from localStorage or create empty array
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Add product to cart
      cart.push(product);

      // Save updated cart
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`Added to cart: ${product.name} (${product.size})`);
    });
  }); */


function searchPage() {
    let query = document.getElementById("searchInput").value.toLowerCase().trim();

    if (query === "art" || query === "Art") {
        window.location.href = "Art.html";
    } 
    else if (query === "pillow" || query === "Pillow") {
        window.location.href = "Pillow.html";
    } 
    else if (query === "baby" || query === "Baby") {
        window.location.href = "Baby.html";
    } 
    else if (query === "jewelry" || query === "jewellery") {
        window.location.href = "Jewleries.html";
    } 
    else {
        alert("Category not found");
    }
}
