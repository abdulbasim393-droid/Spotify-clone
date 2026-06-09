if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {
        
        localStorage.removeItem("isLoggedIn");
        window.location.href = "login.html";
    });

}