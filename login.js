document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const emailInput = document.getElementById("login-email");
  const passwordInput = document.getElementById("login-password");
  const errorDiv = document.getElementById("login-error");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user
    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      errorDiv.textContent = "Invalid email or password";
      errorDiv.style.display = "block";
      return;
    }

    // ✅ Ensure user has cart property if missing (backward compatibility)
    if (!user.cart) user.cart = [];

    // Save current user login
    localStorage.setItem("currentUser", user.email);
    localStorage.setItem("users", JSON.stringify(users));

    // Success
    showToast(`Welcome back, ${email.split("@")[0]}!`, "success");
    
    // ✅ Update cart count immediately after successful login
    const cartCountSpan = document.getElementById("cart-count");
    if (cartCountSpan) {
      cartCountSpan.textContent = user.cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });
});