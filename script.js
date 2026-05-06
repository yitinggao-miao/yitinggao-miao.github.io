const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const carouselImage = document.getElementById("travel-carousel-image");
const authorEasterLink = document.querySelector(".author-easter-link");

document.getElementById("current-year").textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.forEach((navLink) => {
      navLink.classList.toggle("active", navLink === link);
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));

if (authorEasterLink) {
  authorEasterLink.addEventListener("click", (event) => {
    event.preventDefault();

    const password = window.prompt("Please enter the password:");

    if (password === "011127") {
      window.sessionStorage.setItem("easterUnlocked", "true");
      window.location.href = "easter-egg.html";
      return;
    }

    if (password !== null) {
      window.alert("Incorrect password.");
    }
  });
}

if (carouselImage) {
  const carouselPhotos = carouselImage.dataset.photos
    .split(",")
    .map((photo) => photo.trim())
    .filter(Boolean);
  let carouselIndex = 0;

  carouselPhotos.slice(1).forEach((photo) => {
    const image = new Image();
    image.src = photo;
  });

  if (carouselPhotos.length > 1) {
    setInterval(() => {
      carouselIndex = (carouselIndex + 1) % carouselPhotos.length;
      carouselImage.classList.add("is-changing");

      window.setTimeout(() => {
        carouselImage.src = carouselPhotos[carouselIndex];
        carouselImage.classList.remove("is-changing");
      }, 520);
    }, 3200);
  }
}
