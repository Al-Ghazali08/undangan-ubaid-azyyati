const openBtn = document.getElementById("openBtn");
const content = document.getElementById("content");
const music = document.getElementById("music");
const bottomNav = document.getElementById("bottomNav");
const cover = document.querySelector(".cover");

/* =========================
   BUKA UNDANGAN + ANIMASI
========================= */

openBtn.addEventListener("click", () => {

    cover.classList.add("hide");

    setTimeout(() => {

        cover.style.display = "none";

        content.style.display = "block";

        bottomNav.style.display = "flex";

        music.play();

        startScrollAnimation();

    }, 800);

});

/* =========================
   NAMA TAMU DARI URL
========================= */

const params = new URLSearchParams(window.location.search);

const guest = params.get("to");

if (guest) {
    document.getElementById("guestName").textContent = guest;
}

/* =========================
   COUNTDOWN
========================= */

const targetDate = new Date("December 20, 2026 08:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + " Hari " +
        hours + " Jam " +
        minutes + " Menit " +
        seconds + " Detik";

}, 1000);

/* =========================
   ANIMASI SCROLL
   (MUNCUL & HILANG)
========================= */

function startScrollAnimation() {

    const elements = document.querySelectorAll(".section, .profile");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }

        });

    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
}