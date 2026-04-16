const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
    const closeMenu = () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    };

    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.classList.toggle("active");
        navMenu.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            closeMenu();
        }
    });
}

if (navbar) {
    const syncNavbar = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 24);
    };

    syncNavbar();
    window.addEventListener("scroll", syncNavbar);
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-menu a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
        link.classList.add("is-current");
    }
});

document.querySelectorAll(".current-year").forEach((yearNode) => {
    yearNode.textContent = String(new Date().getFullYear());
});

const revealItems = document.querySelectorAll("[data-reveal]");
if (revealItems.length) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".carousel-card"));
    const dotsWrap = carousel.querySelector("[data-carousel-dots]");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");

    if (!track || !slides.length || !dotsWrap || !prevButton || !nextButton) {
        return;
    }

    let currentIndex = 0;

    const renderDots = () => {
        dotsWrap.innerHTML = "";
        slides.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.className = "carousel-dot";
            dot.setAttribute("aria-label", `Go to card ${index + 1}`);
            dot.classList.toggle("is-active", index === currentIndex);
            dot.addEventListener("click", () => {
                currentIndex = index;
                updateCarousel();
            });
            dotsWrap.appendChild(dot);
        });
    };

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        Array.from(dotsWrap.children).forEach((dot, index) => {
            dot.classList.toggle("is-active", index === currentIndex);
        });
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    });

    renderDots();
    updateCarousel();
});
