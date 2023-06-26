let navbar =document.querySelector(".navbar-fixed");

let hamburger =document.getElementById('hamburger');

let navbarList = document.getElementById('navbar-list');

hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle("open")
})

navbarList.addEventListener("click", ()=>{
    navbar.classList.toggle("open")
})

