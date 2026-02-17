const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    openBtn.style.display = "none";
    music.play();
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    openBtn.style.display = "inline-block";
});
