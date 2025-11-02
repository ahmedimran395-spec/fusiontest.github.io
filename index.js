/*window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};*/
//sticky navbar, back to top button, revise all html headers, screen size, projects section title aniamtion, section 2 and 4 links.

const section2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.7 }
);
const slideLeftObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.7 }
);
const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.7 }
);
const section3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.85 }
);
const slideRightObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.75 }
);
const slideDownObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.75 }
);

document
  .querySelectorAll(".section-2-fade")
  .forEach((el) => section2.observe(el));
document
  .querySelectorAll(".slide-left")
  .forEach((el) => slideLeftObserver.observe(el));
document
  .querySelectorAll(".fade-in")
  .forEach((el) => fadeInObserver.observe(el));
document
  .querySelectorAll(".container-slide")
  .forEach((el) => section3.observe(el));
document
  .querySelectorAll(".slide-right")
  .forEach((el) => slideRightObserver.observe(el));
document
  .querySelectorAll(".slide-down")
  .forEach((el) => slideDownObserver.observe(el));
