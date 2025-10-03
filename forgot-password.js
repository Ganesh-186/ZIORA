document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgot-form");
  const emailInput = document.getElementById("forgot-email");
  const passwordInput = document.getElementById("forgot-password");
  const confirmInput = document.getElementById("forgot-confirm");
  const answerInput = document.getElementById("forgot-answer");
  const errorDiv = document.getElementById("forgot-error");
  const questionSelect = document.getElementById("forgot-question");
  const resetSection = document.getElementById("reset-section");
  const questionSelect = document.getElementById("forgot-question");
  
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = null;

  // Step 1: Check Email
  checkEmailBtn.addEventListener("click", () => {
    const email = emailInput.value.trim().toLowerCase();
    user = users.find(u => u.email === email);

    if (!user) {
      showToast("Email not found. Please sign up first.", "error");
      setTimeout(() => {
        window.location.href = "signup.html";
      }, 1500);
      return;
    }

    // If user exists → show reset section
    questionSelect.value = user.securityQuestion;
    resetSection.style.display = "block";
    checkEmailBtn.style.display = "none";
    emailInput.disabled = true
  });

  // Step 2: Reset Password
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!user) return;

    const newPassword = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();
    const answer = answerInput.value.trim().toLowerCase();

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
