const btnOpenMenu = document.querySelector(".icon-menu i");
const drawer = document.querySelector(".drawer");
const Links = document.querySelectorAll("nav ul li a");

btnOpenMenu.addEventListener("click", () => {
  drawer.classList.toggle("active");
  if (btnOpenMenu.classList.contains("fa-bars")) {
    btnOpenMenu.classList.remove("fa-bars");
    btnOpenMenu.classList.add("fa-xmark");
  } else {
    btnOpenMenu.classList.add("fa-bars");
    btnOpenMenu.classList.remove("fa-xmark");
  }
});

function setActive(clickedElement) {
  Links.forEach(function (link) {
    link.classList.remove("active");
  });

  clickedElement.classList.add("active");
}

function closeDrawer() {
  drawer.classList.remove("active");
  btnOpenMenu.classList.remove("fa-xmark");
  btnOpenMenu.classList.add("fa-bars");

  document.removeEventListener("click", closeDrawerOnClickOutside);
}

function closeDrawerOnClickOutside(event) {
  if (!drawer.contains(event.target)) {
    closeDrawer();
  }
}

window.addEventListener("scroll", function () {
  var sections = document.querySelectorAll("section");

  var scrollPosition = window.scrollY + 50;

  sections.forEach(function (section, index) {
    var sectionTop = section.offsetTop;
    var sectionBottom = sectionTop + section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      Links[index].classList.add("active");
      Links[3].classList.remove("active");
    } else {
      Links[index].classList.remove("active");
    }
  });
});

const carousel = document.querySelector(".carousel");
let currentIndex = 0;

function showSlide(index) {
  const itemWidth = document.querySelector(".carousel-item").offsetWidth;
  const newPosition = -index * itemWidth;
  carousel.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % (carousel.children.length / 1.5);
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex =
    (currentIndex - 1 + carousel.children.length / 1.5) %
    (carousel.children.length / 1.5);
  showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", showSlide(currentIndex));
