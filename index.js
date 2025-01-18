document.addEventListener("DOMContentLoaded", () => {
    const signupButton = document.getElementById("signupButton");
    signupButton.addEventListener("click", () => {
      const email = document.getElementById("emailInput").value;
      const password = document.getElementById("passwordInput").value;
      if (email && password) {
        const user = { email, password };
        localStorage.setItem("user_" + email, JSON.stringify(user));
        alert("Account created successfully!");
        document.getElementById("signupForm").reset();
      } else {
        alert("Please fill out all fields!");
      }
    });
  });