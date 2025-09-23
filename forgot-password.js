document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgot-form");
  const emailInput = document.getElementById("forgot-email");
  const passwordInput = document.getElementById("forgot-password");
  const confirmInput = document.getElementById("forgot-confirm");
  const answerInput = document.getElementById("forgot-answer");
  const errorDiv = document.getElementById("forgot-error");
  const securityContainer = document.getElementById("security-question-container");
  const questionSelect = document.getElementById("forgot-question");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = null;

  // Show security question when email is entered
  emailInput.addEventListener("blur", () => {
    const email = emailInput.value.trim().toLowerCase();
    user = users.find(u => u.email === email);
    if (user) {
      questionSelect.value = user.securityQuestion;
      securityContainer.style.display = "block";
    } else {
      securityContainer.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const newPassword = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();
    const answer = answerInput.value.trim().toLowerCase();

    if (!user) {
      errorDiv.textContent = "Email not found. Please sign up first.";
      errorDiv.style.display = "block";
      return;
    }

    if (answer !== user.securityAnswer) {
      errorDiv.textContent = "Security answer is incorrect.";
      errorDiv.style.display = "block";
      return;
    }

    if (newPassword !== confirmPassword) {
      errorDiv.textContent = "Passwords do not match.";
      errorDiv.style.display = "block";
      return;
    }

    errorDiv.style.display = "none";

    // ✅ Update password
    user.password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    showToast("Password reset successful! Please login.", "success");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
});
