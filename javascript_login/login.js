function login() {
    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    // Replace these hardcoded valid credentials with your own
    const validUsername = "user123";
    const validPassword = "password123";

    if (inputUsername === validUsername && inputPassword === validPassword) {
        document.getElementById("loginStatus").textContent = "Login successful!";
        document.getElementById("loginStatus").style.color = "green";
    } else {
        document.getElementById("loginStatus").textContent = "Invalid username or password. Please try again.";
        document.getElementById("loginStatus").style.color = "red";
    }
}

// function myFunction(x) {
//     x.classList.toggle("change");
//   }
  