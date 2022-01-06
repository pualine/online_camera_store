/**
 ****************************************
 Responsive Navigation
 ****************************************
 */
const humburgerIcon = document.querySelector(".humburger-icon");
const navigationList = document.querySelector(".navigation-list");
const NavLinks = document.querySelectorAll(".navigation-list li");

humburgerIcon.addEventListener("click", () => {
  navigationList.classList.toggle("open");
});

/*
 *****************************************
 POP UP
 *****************************************
  */
const popUp = document.querySelector(".pop-up");
const closePopup = document.querySelector(".pop-up-close");

if (popUp) {
  closePopup.addEventListener("click", () => {
    popUp.classList.add("hide-pop");
  });
  window.addEventListener("load", () => {
    setTimeout(() => {
      popUp.classList.remove("hide-pop");
    });
  });
}

/*
 **********************************
 Fixed Navigation
 **********************************
 */
const navbar = document.querySelector(".navigation");
const goToTop = document.querySelector(".go-to-top");
const scrollLink = document.querySelectorAll(".scroll-link");
const navContainer = document.querySelector(".menu-Nav");

Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (event) => {
    //     // Prevent default
    event.preventDefault();

    const id = event.currentTarget.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNavbar = navbar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNavbar) {
      position = position - navHeight;
    }
    window.scrollTo({
      left: 0,
      right: 0,
      top: position,
    });
    navContainer.style.left = "-50rem"; // WIP

    document.body.classList.remove("active");
  });
});
//  Smooth Scroll

// Fixed Navbars
window.addEventListener("scroll", (event) => {
  const heightScroll = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  if (heightScroll > navHeight) {
    navbar.classList.add("fix-nav");
  } else {
    navbar.classList.remove("fix-nav");
  }

  if (heightScroll > 300) {
    goToTop.classList.add("scroll__link");
  } else {
    goToTop.classList.remove("scroll__link");
  }
});
// Animation On Scroll
AOS.int();
