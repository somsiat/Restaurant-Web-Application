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

document.addEventListener("DOMContentLoaded", function() {
    const testimonialsContainer = document.querySelector(".testimonial-items");
    const testimonials = document.querySelectorAll(".testimonial-item");
    let currentIndex = 0;

    // Dodaj debugowanie do sprawdzenia elementów
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






