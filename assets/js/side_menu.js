function open_side_menu() {
    document.getElementById("side_menu").style.display = "block";
    setTimeout(() => {
        document.getElementById("side_menu").style.width = "250px";
    }, 10);
}

function close_side_menu() {
    document.getElementById("side_menu").style.width = "0";
    setTimeout(() => {
        document.getElementById("side_menu").style.display = "none";
    }, 500);
}

window.addEventListener("resize", (event) => {
    if (window.innerWidth > 800) {
        close_side_menu();
    }
});