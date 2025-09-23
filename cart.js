document.addEventListener("DOMContentLoaded", () => {
  const currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.email === currentUser);
  if (!user) return;

  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotalDiv = document.getElementById("cart-total");
  const cartCountSpan = document.getElementById("cart-count");

  cartCountSpan.textContent = user.cart.reduce((acc, item) => acc + item.quantity, 0);

  if (user.cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalDiv.textContent = "";
    return;
  }

  let total = 0;
  cartItemsDiv.innerHTML = "";

  user.cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="cart-img">
      <div class="cart-details">
        <p><strong>${item.name}</strong></p>
        <p>Size: <strong>${item.size}</strong></p>  <!-- Display size here -->
        <p>₹${item.price}</p>
        <div class="quantity-controls">
          <button onclick="updateQuantity(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(itemDiv);
  });

  cartTotalDiv.textContent = `Total: ₹${total}`;

  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (user.cart.length === 0) {
      showToast("Your cart is empty!", "error");
    } else {
      showToast("Checkout successful! Redirecting...", "success");
      user.cart = [];
      localStorage.setItem("users", JSON.stringify(users));
      setTimeout(() => (window.location.href = "order-placed.html"), 1500);
    }
  });

  document.getElementById("clear-cart-btn").addEventListener("click", () => {
    user.cart = [];
    localStorage.setItem("users", JSON.stringify(users));
    showToast("Cart cleared!", "error");
    setTimeout(() => location.reload(), 1000);
  });
});

function removeItem(index) {
  const currentUser = localStorage.getItem("currentUser");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.email === currentUser);
  if (!user) return;

  user.cart.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  showToast("Item removed from cart", "error");
  setTimeout(() => location.reload(), 1000);
}

function updateQuantity(index, change) {
  const currentUser = localStorage.getItem("currentUser");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.email === currentUser);
  if (!user) return;

  user.cart[index].quantity = Math.max(1, user.cart[index].quantity + change);
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
}
