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

// Testimonials
document.addEventListener("DOMContentLoaded", function() {
    const testimonialsContainer = document.querySelector(".testimonial-items");
    const testimonials = document.querySelectorAll(".testimonial-item");
    let currentIndex = 0;

    // Debugowanie do sprawdzenia elementów
    console.log("Number of testimonials:", testimonials.length);

    document.getElementById("next").addEventListener("click", () => {
        // Aktualizacja indeksu z pętlą
        if (currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        console.log("Next button clicked. Current index:", currentIndex);
        updateCarousel();
    });
    // Sterowanie lewo prawo
    document.getElementById("prev").addEventListener("click", () => {
        // Aktualizacja indeksu z pętlą
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = testimonials.length - 1;
        }
        console.log("Previous button clicked. Current index:", currentIndex);
        updateCarousel();
    });

    function updateCarousel() {
        testimonialsContainer.style.transform = `translateX(-${100 * currentIndex}%)`;
        console.log("Updating carousel. TranslateX value:", `-${100 * currentIndex}%`);
    }
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






