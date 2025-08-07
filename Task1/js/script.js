const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const cross = document.getElementById("cross-button");

let menuOpen = false;


function openMenu() {
    menuOpen = true;
    overlay.style.display = "block";
    sidebar.style.width = "250px";
    sidebar.style.pointerEvents = "auto";
    cross.style.display = "block";
}

function closeMenu() {
    menuOpen = false;
    overlay.style.display = "none";
    sidebar.style.width = "0px";
    sidebar.style.pointerEvents = "none";
    cross.style.display = "none";
}

cross.addEventListener('click', function () {
    closeMenu();
})

hamburger.addEventListener('click', function () {
    openMenu();
})

overlay.addEventListener("click", function () {
    closeMenu();
})



