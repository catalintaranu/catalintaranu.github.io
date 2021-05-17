const hamburger = document.getElementById("hamburger");
const ulnav = document.getElementById("ulnav");
const nav = document.querySelector("nav");
const container2 = document.getElementById("container2");
const arrowcontainer = document.getElementById("arrowcontainer");




hamburger.addEventListener("click" , ()=>{
    ulnav.classList.toggle("arata");
    nav.classList.toggle("navtelefon");
    hamburger.classList.toggle ("hamburgerclick");
    container2.classList.toggle ("farapadding");
    arrowcontainer.classList.toggle("farapadding");
    
});