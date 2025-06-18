const menu = document.querySelector("#menu");
const open= document.querySelector("#hamburger");

open.addEventListener("click", () =>{
    menu.classList.toggle("hidden");
    open.classList.toggle("hidden");
});