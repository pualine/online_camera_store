/*******************
 * Hero Area/ Glidejs Carousel slide
 * ******************
 */

const slidderOne = document.getElementById("glide_1");
const slidderTwo = document.getElementById("glide_2");
const slidderThree = document.getElementById("glide_3");
const slidderFour = document.getElementById("glide_4"); //Product Glide
//Product Glide
//Product Glide
// console.log(slidderTwo);

if (slidderOne) {
  new Glide(slidderOne, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();
}

/**************************************
 * Product Glide
 ******************************************/
if (slidderTwo) {
  new Glide(slidderTwo, {
    type: "carousel",
    startAt: 0,
    // autoplay: 3000,
    hoverpause: true,
    perView: 4,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
    breakpoints: {
      1200: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
    },
  }).mount();
}

/***************************
 * Testimonial
 ************************/
if (slidderThree) {
  new Glide(slidderThree, {
    type: "carousel",
    startAt: 0,
    // autoplay: 3000,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "ease-in-out",
  }).mount();
}

/***************************
 * News Section
 ************************/
if (slidderFour) {
  new Glide(slidderFour, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    hoverpause: true,
    perView: 3,
    animationDuration: 800,
    animationTimingFunc: "linear",
    breakpoints: {
      998: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
}
