// Adapted from https://codepen.io/tutsplus/pen/QWGYKMN
const scrollElements = document.querySelectorAll(".scroll-animate");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  if (!element.classList.contains("scrolled-once")) {
    element.classList.add("scrolling");
  }
};

const hideScrollElement = (element) => {
  if (element.classList.contains("scroll-once") && element.classList.conaints("scrolling")) {
    element.classList.add("scrolled-once");
  }
  element.classList.remove("scrolling");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
// We might have reloaded the page and preserved scroll position.
// Ensure animation occurs
document.addEventListener("DOMContentLoaded", () => {
  handleScrollAnimation();
});
