const form = document.getElementById("login-form");
const loginBtn = document.getElementById("login-btn");

const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (loginUsername.value == "") {
    document.getElementById("login-alert").className =
      "alert alert-danger alert-dismissible";
    document.getElementById("login-alert").innerHTML =
      "Fill in your Username or Email";
  } else if (loginPassword.value == "") {
    document.getElementById("login-alert").className =
      "alert alert-danger alert-dismissible";
    document.getElementById("login-alert").innerHTML = "Fill in your Password";
  } else {
    // Perform authentication from JSON database
    authenticateUser(loginUsername.value, loginPassword.value);
  }
});

function authenticateUser(usernameOrEmail, password) {
  document.getElementById("login-span").className =
    "spinner-border spinner-border-sm";
  document.getElementById("login-alert").className = "";

  fetch("users.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const user = data.find(
        (user) =>
          (user.username === usernameOrEmail ||
            user.email === usernameOrEmail) &&
          user.password === password
      );

      if (user) {
        document.getElementById("login-alert").className =
          "alert alert-success alert-dismissible";
        document.getElementById("login-alert").innerHTML = "Login successful!";

        // Redirect to home page after a short delay
        setTimeout(() => {
          window.location.href = "pages/home.html";
        }, 1000); // 1 second delay for the user to see the success message
      } else {
        document.getElementById("login-alert").className =
          "alert alert-danger alert-dismissible";
        document.getElementById("login-alert").innerHTML =
          "Invalid username or password.";
      }

      // Clear the spinner
      document.getElementById("login-span").className = "";
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      document.getElementById("login-alert").className =
        "alert alert-danger alert-dismissible";
      document.getElementById("login-alert").innerHTML =
        "Error authenticating. Please try again.";
      // Clear the spinner
      document.getElementById("login-span").className = "";
    });
}
