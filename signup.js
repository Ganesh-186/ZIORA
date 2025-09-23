document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const emailInput = document.getElementById("signup-email");
  const passwordInput = document.getElementById("signup-password");
  const confirmInput = document.getElementById("signup-confirm");
  const questionSelect = document.getElementById("signup-question");
  const answerInput = document.getElementById("signup-answer");
  const errorDiv = document.getElementById("signup-error");

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();
    const question = questionSelect.value;
    const answer = answerInput.value.trim().toLowerCase();

    // Password match check
    if (password !== confirmPassword) {
      errorDiv.textContent = "Passwords do not match";
      errorDiv.style.display = "block";
      return;
    }

    // Security question check
    if (!question || !answer) {
      errorDiv.textContent = "Please select a security question and provide an answer";
      errorDiv.style.display = "block";
      return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some(user => user.email === email)) {
      errorDiv.textContent = "Email already registered";
      errorDiv.style.display = "block";
      return;
    }

    errorDiv.style.display = "none";

    // Add new user
    users.push({
      email,
      password,
      cart: [],
      searchHistory: [],
      securityQuestion: question,
      securityAnswer: answer
    });

    localStorage.setItem("users", JSON.stringify(users));

    // Success → show toast + redirect
    showToast("Account created successfully! Please login.", "success");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
   
});




