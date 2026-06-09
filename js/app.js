const songContainer =
    document.getElementById("songContainer");

document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("spotifyUser"));

    if (user) {
        document.getElementById("profileName").textContent =
            user.username;
    }
});

function loadSongs() {

    songs.forEach(song => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <h4>${song.title}</h4>
            <p>${song.artist}</p>
        `;

        card.addEventListener("click", () => {
            playSong(song);
        });

        songContainer.appendChild(card);
    });
}

loadSongs();


const overlay =
    document.getElementById("playerOverlay");

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

        const title =
            card.querySelector("h3").textContent;

        const image =
            card.querySelector("img").src;

        document.getElementById("playerTitle")
            .textContent = title;

        document.getElementById("playerImage")
            .src = image;

        overlay.classList.add("show");
    });
});

document.getElementById("closePlayer")
    .addEventListener("click", () => {
        overlay.classList.remove("show");
    });