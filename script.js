// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Sticky Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.background = "#ffffff";

        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,.12)";

    }else{

        navbar.style.background = "rgba(255,255,255,.75)";

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

// Back To Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("active");

    }else{

        topBtn.classList.remove("active");

    }

});

// Scroll Reveal

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            section.classList.add("active");
            section.classList.add("reveal");

        }

    });

});