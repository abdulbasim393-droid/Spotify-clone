const audio = new Audio();

let currentSongIndex = 0;
let isPlaying = false;

/* Player Elements */

const playerCover =
    document.getElementById("playerCover");

const playerTitle =
    document.getElementById("playerTitle");

const playerArtist =
    document.getElementById("playerArtist");

const playPauseBtn =
    document.getElementById("playPauseBtn");

const progressBar =
    document.getElementById("progressBar");

const volumeSlider =
    document.getElementById("volumeSlider");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");

const musicPlayer =
    document.getElementById("musicPlayer");

const playerOverlay =
    document.getElementById("playerOverlay");

const closePlayer =
    document.getElementById("closePlayer");

const overlayPlayBtn =
    document.getElementById("overlayPlayBtn");

const overlayNextBtn =
    document.getElementById("overlayNextBtn");

const overlayPrevBtn =
    document.getElementById("overlayPrevBtn");

const overlayProgress =
    document.getElementById("overlayProgress");



    [
    playPauseBtn,
    nextBtn,
    prevBtn,
    progressBar,
    volumeSlider
].forEach(element => {

    element.addEventListener("click", (e) => {
        e.stopPropagation();
    });

});

overlayPlayBtn.addEventListener("click", () => {
    playPauseBtn.click();
});

overlayNextBtn.addEventListener("click", () => {
    nextBtn.click();
});

overlayPrevBtn.addEventListener("click", () => {
    prevBtn.click();
});




/* Play Song */

function playSong(song) {

    currentSongIndex =
        songs.findIndex(s => s.id === song.id);

    audio.src = song.audio;

    audio.play();

    isPlaying = true;

    playPauseBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    playerCover.src = song.cover;

    playerTitle.textContent = song.title;

    playerArtist.textContent = song.artist;
}

/* Play/Pause Button */

playPauseBtn.addEventListener("click", () => {

    if (!audio.src) return;

    if (isPlaying) {

        audio.pause();

        playPauseBtn.innerHTML =
            '<i class="fa-solid fa-play"></i>';

        overlayPlayBtn.innerHTML =
            '<i class="fa-solid fa-play"></i>';

    } else {

        audio.play();

        playPauseBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

        overlayPlayBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';
    }

    isPlaying = !isPlaying;
});

/* Next Song */

nextBtn.addEventListener("click", () => {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    playSong(songs[currentSongIndex]);
});

/* Previous Song */

prevBtn.addEventListener("click", () => {

    currentSongIndex--;

    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }

    playSong(songs[currentSongIndex]);
});

/* Progress Bar Update */

audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    const progress =
        (audio.currentTime / audio.duration) * 100;

    progressBar.value = progress;

    overlayProgress.value = progress;
});

/* Seek Song */

progressBar.addEventListener("input", () => {

    if (!audio.duration) return;

    audio.currentTime =
        (progressBar.value / 100) * audio.duration;
});

/* Overlay Seek Song */

overlayProgress.addEventListener("input", seekSong);
overlayProgress.addEventListener("change", seekSong);

function seekSong() {

    if (!audio.duration) return;

    audio.currentTime =
        (overlayProgress.value / 100) * audio.duration;

    progressBar.value =
        overlayProgress.value;
}

/* Volume */

volumeSlider.addEventListener("input", () => {

    audio.volume =
        volumeSlider.value / 100;
});

/* Default Volume */

audio.volume = 0.8;

/* Auto Next Song */

audio.addEventListener("ended", () => {

    currentSongIndex++;

    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }

    playSong(songs[currentSongIndex]);
});


musicPlayer.addEventListener("click", () => {

    document.getElementById("overlayImage").src =
        playerCover.src;

    document.getElementById("overlayTitle").textContent =
        playerTitle.textContent;

    document.getElementById("overlayArtist").textContent =
        playerArtist.textContent;

    playerOverlay.classList.add("show");
});

closePlayer.addEventListener("click", (e) => {

    e.stopPropagation();

    playerOverlay.classList.remove("show");
});