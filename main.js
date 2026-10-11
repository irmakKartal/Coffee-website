// Initialize Swiper only if element exists
if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// Menu open and close
const menu = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle("move");
        navbar.classList.toggle("open-menu");
    };

    // Close mobile menu when clicking any nav link
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("move");
            navbar.classList.remove("open-menu");
        });
    });

    // Close menu on scroll
    window.addEventListener("scroll", () => {
        menu.classList.remove("move");
        navbar.classList.remove("open-menu");
    });
}

// Table Booking Form Handler
const bookForm = document.getElementById("book-form");
if (bookForm) {
    bookForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! We will contact you shortly to confirm your booking.");
        bookForm.reset();
    });
}

// ScrollReveal Animations
if (typeof ScrollReveal !== "undefined") {
    const animate = ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 1200,
        delay: 200,
        reset: false,
    });

    animate.reveal(".nav");
    animate.reveal(".home-text", { origin: "left" });
    animate.reveal(".home-img", { origin: "bottom" });
    animate.reveal(".ser-box, .product-box, .team-box, .book-data", { interval: 80 });
}
