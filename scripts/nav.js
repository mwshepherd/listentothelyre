const navSlide = () => {
  let navToggle = document.querySelector(".nav-main-nav-toggle");
  let navUl = document.querySelector(".nav-main-nav");

  navToggle.addEventListener("click", function() {
    navUl.classList.toggle("open");
  });
};
navSlide();
