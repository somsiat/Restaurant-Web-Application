// Nawigacja hamburgerkiem - mobilki
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

// Ruchomy navbar z tłem
document.addEventListener("DOMContentLoaded", function(){
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function(){
        if(this.window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


//rezerwacja stolika - formularz
const modal = document.getElementById("reservation");
const openWindow = document.getElementById("openWindow");
const closeBtn = document.getElementById("x-button");

openWindow.onclick = function() {
    modal.style.display = "block"
}

closeBtn.onclick = function() {
    modal.style.display = "none"
}

function submitForm(event) {
    event.preventDefault();

    alert("Dziękujemy! Rezerwacja przebiegła pomyślnie.");

    modal.style.display = "none";

    return false;
}


// Testimonials
document.addEventListener("DOMContentLoaded", function() {
    const testimonialsContainer = document.querySelector(".testimonial-items");
    const testimonials = document.querySelectorAll(".testimonial-item");
    let currentIndex = 0;
    let interval;

    function updateCarousel() {
        testimonialsContainer.style.transform = `translateX(-${100 * currentIndex}%)`;
    }

    function rotateTestimonials() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    }

    function startAutoRotate() {
        interval = setInterval(rotateTestimonials, 4000);
    }

    function stopAutoRotate() {
        clearInterval(interval);
    }

    document.getElementById("next").addEventListener("click", () => {
        stopAutoRotate();
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
        startAutoRotate();
    });

    document.getElementById("prev").addEventListener("click", () => {
        stopAutoRotate();
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
        startAutoRotate();
    });

    startAutoRotate();
});







