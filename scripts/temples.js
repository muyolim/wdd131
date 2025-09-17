// Dynamic year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        hamburger.textContent = "☰";
    } else {
        navMenu.style.display = "block";
        hamburger.textContent = "✖";
    }
});

