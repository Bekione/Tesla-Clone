const openMenu = () => {
    document.querySelector(".backdrop").className = "backdrop active";
    document.querySelector("aside").className = "active";
}
const closeMenu = () => {
    document.querySelector(".backdrop").className = "backdrop";
    document.querySelector("aside").className = "";
}
document.getElementById("menu-btn").onclick = e => {
    e.preventDefault();
    openMenu();
}
document.querySelector(".close").onclick = e => {
    e.preventDefault();
    closeMenu();
} 
document.querySelector(".backdrop").onclick = e => {
    e.preventDefault();
    closeMenu();
}