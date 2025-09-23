document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-button");
  const searchInput = document.getElementById("search");
  const productBoxes = document.querySelectorAll(".products-box");

  // Add search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    productBoxes.forEach(box => {
      const productName = box.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(searchTerm)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentUser = localStorage.getItem("currentUser");
      if (!currentUser) {
        window.location.href = "login.html";
        return;
      }

      const productBox = btn.closest(".products-box");
      const product = {
        name: productBox.querySelector("h3").textContent,
        price: parseFloat(productBox.querySelector("p").textContent.replace("₹", "")),
        img: productBox.querySelector("img").src,
        quantity: 1,
        // Add a default size for collection page if not specified
        size: "M" 
      };

      let users = JSON.parse(localStorage.getItem("users")) || [];
      let user = users.find(u => u.email === currentUser);
      if (!user) return;

      // Ensure user.cart exists
      if (!user.cart) user.cart = [];

      const existingItemIndex = user.cart.findIndex(item => item.name === product.name && item.size === product.size);
        if (existingItemIndex !== -1) {
          user.cart[existingItemIndex].quantity += product.quantity;
        } 
        else {
          user.cart.push(product);
        }
      

      // ✅ Move localStorage.setItem outside the if/else to ensure it always saves
        localStorage.setItem("users", JSON.stringify(users));
        showToast(`${product.name} added to cart!`, "success");
      document.getElementById("cart-count").textContent =
        user.cart.reduce((acc, item) => acc + item.quantity, 0);
    });
  });
});