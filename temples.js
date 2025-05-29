const year = document.querySelector("#currentyear");
const lastmod = document.querySelector("#lastModified")
const today=new Date();

year.innerHTML = today.getFullYear();
lastmod.innerHTML=new Date(document.lastModified);

const menu = document.querySelector("#menu");
const open= document.querySelector("#hamburger");

open.addEventListener("click", () =>{
    menu.classList.toggle("hidden");
    open.classList.toggle("hidden");
});