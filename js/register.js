document
    .getElementById("registerForm")
    .addEventListener("submit", (e) => {

        e.preventDefault();

        const username =
            document.getElementById("username").value;

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const user = {
            username,
            email,
            password
        };

        localStorage.setItem(
            "spotifyUser",
            JSON.stringify(user)
        );

        alert("Registration successful!");

        window.location.href = "login.html";
    });