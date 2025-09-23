// ==============================
// Side Navbar
// ==============================
function shownavbar() {
  document.querySelector(".side-navbar").style.left = "0";
  document.getElementById("sidenav-overlay").classList.add("show"); // Show overlay
}
function hidenavbar() {
  document.querySelector(".side-navbar").style.left = "-250px";
  document.getElementById("sidenav-overlay").classList.remove("show"); // Hide overlay
}
// ==============================
// Toast
// ==============================
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.className = `show ${type}`;
  toast.textContent = message;
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2000);
}

// ==============================
// Navbar & Side Navbar Auth Links
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const authLink = document.getElementById("auth-link");
  const sideAuthLink = document.getElementById("side-auth-link");
  const currentUser = localStorage.getItem("currentUser");

  if (authLink && sideAuthLink) {
    if (currentUser) {
      let username = currentUser.split("@")[0];

      // Navbar dropdown
      authLink.innerHTML = `
        <div class="dropdown">
          <a href="#"><i class="fa-solid fa-user"></i> Hi, ${username}</a>
          <div class="dropdown-content">
            <a href="#" id="logout-btn">Logout</a>
          </div>
        </div>`;

      // Side navbar dropdown
      sideAuthLink.innerHTML = `
        <div class="dropdown">
          <a href="#"><i class="fa-solid fa-user"></i> Hi, ${username}</a>
          <div class="dropdown-content">
            <a href="#" id="side-logout-btn">Logout</a>
          </div>
        </div>`;
    } else {
      // Show login if no user
      authLink.innerHTML = `<a href="login.html"><i class="fa-solid fa-user"></i> Login</a>`;
      sideAuthLink.innerHTML = `<a href="login.html"><i class="fa-solid fa-user"></i> Login</a>`;
    }
  }

  // Update cart count for logged-in user
  const cartCountSpan = document.getElementById("cart-count");
  if (cartCountSpan && currentUser) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email === currentUser);
    if (user) {
      cartCountSpan.textContent = user.cart.reduce((acc, item) => acc + item.quantity, 0);
    }
  }

  // Newsletter subscribe button handler
  const newsInput = document.querySelector(".news input");
  const newsButton = document.querySelector(".news button");
  if (newsInput && newsButton) {
    newsButton.addEventListener("click", () => {
      newsInput.value = ""; // Reset input to default state
      showToast("Subscribed successfully!", "success");
    });
  }
});

// ==============================
// Logout Handler
// ==============================
function handleLogout() {
  const currentUser = localStorage.getItem("currentUser");
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // ✅ Save user data back before logout
  let user = users.find(u => u.email === currentUser);
  if (user) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  // Clear only currentUser
  localStorage.removeItem("currentUser");

  // ✅ Reset cart count immediately
  const cartCountSpan = document.getElementById("cart-count");
  if (cartCountSpan) cartCountSpan.textContent = "0";

  // ✅ Show logout toast
  showToast("Logged out successfully!", "success");

  // Redirect after short delay
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1200);
}

// ==============================
// Dropdown Toggle (Navbar + Side Navbar)
// ==============================
document.addEventListener("click", (e) => {
  // Toggle when clicking the Hi, username link
  if (e.target.closest(".dropdown > a")) {
    e.preventDefault();
    const parent = e.target.closest(".dropdown");
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== parent) d.classList.remove("active");
    });
    parent.classList.toggle("active");
  } else {
    // Close if clicking outside
    document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
  }
  const form = document.querySelector(".contact-section form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      fetch(form.action, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(response => {
        if (response.ok) {
          showToast("Message sent! We'll get back to you soon.", "success");
          
            setTimeout(() => {
              window.location.href = "index.html";
            }, 1500);
          
        } else {
          showToast("Something went wrong. Please try again.", "error");
        }
      }).catch(() => {
        showToast("Something went wrong. Please try again.", "error");
      });
    });
  }
});

// ==============================
// Logout Button Listeners
// ==============================
document.addEventListener("click", (e) => {
  if (e.target.id === "logout-btn" || e.target.id === "side-logout-btn") {
    e.preventDefault();
    handleLogout();
  }
});
