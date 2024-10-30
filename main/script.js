document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
    function checkScreenSize() {
        if (window.innerWidth >= 768) {
    
            navbar.classList.remove("active");
        }
    }

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
});
