document.querySelector(".header__burger-btn").addEventListener("click", () => {
  document.querySelector(".header__burger").classList.toggle("active__burger");
});

document.querySelectorAll(".plan__button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".plan__button").forEach((button) => {
      button.classList.remove("selected-plan");
    });
    button.classList.add("selected-plan");
  });
});

// Swiper

const swiper = new Swiper(".swiper", {
  speed: 100,
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "slide",
  // If we need pagination
  pagination: {
    el: ".swiper-pages",
    clickable: true,
  },

  slidesPerView: 3,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
