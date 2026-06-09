document
    .getElementById("loginForm")
    .addEventListener("submit", (e) => {

        e.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const storedUser =
            JSON.parse(
                localStorage.getItem("spotifyUser")
            );

        if (!storedUser) {

            alert("No account found");

            return;
        }

        if (
            email === storedUser.email &&
            password === storedUser.password
        ) {

            alert("Login successful!");

            localStorage.setItem("isLoggedIn", "true");

            window.location.href = "index.html";

        } else {

            alert("Invalid email or password");
        }
    });