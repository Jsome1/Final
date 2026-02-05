const burgerMenu = document.querySelector(".burger");
const xMark = document.querySelector(".xmark");
const menu = document.querySelector(".menu");

burgerMenu.addEventListener("click", () => {
    menu.style.left = "0";
    burgerMenu.style.display = "none";
    xMark.style.display = "block"; 

});
xMark.addEventListener("click", () => {
    menu.style.left = "-150%";
    burgerMenu.style.display = "block";
    xMark.style.display = "none"; 

});
