window.addEventListener("scroll", function () {
  const logo = document.querySelector(".firstDoctos .logo");
  const doctos = document.querySelector(".firstDoctos .doctos");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    logo.classList.add("logo-in");
    logo.classList.remove("logo-out");
    doctos.classList.add("doctos-out");
    doctos.classList.remove("doctos-in");
  } else {
    logo.classList.remove("logo-in");
    logo.classList.add("logo-out");
    doctos.classList.remove("doctos-out");
    doctos.classList.add("doctos-in");
  }
});

// const neuDivs = document.querySelectorAll('.neu');
//     neuDivs.forEach((div, index) => {
//       setTimeout(() => {
//         div.classList.add('show');
//       }, index * 350); // Adjust the delay as needed
//     });

// const neuDivs = document.querySelectorAll(".neu");
// setTimeout(() => {
//   neuDivs.forEach((div, index) => {
//     div.style.transitionDelay = `${index * 0.25}s`;
//     div.classList.add("show");
//   });
// }, 500);

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("neu")) {
        entry.target.classList.add("show");
      } else if (entry.target.classList.contains("image-place")) {
        entry.target.classList.add("animate-image-place");
      } else if (entry.target.classList.contains("imagelogo")) {
        entry.target.classList.add("animate-imagelogo");
      }
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver(handleIntersection, options);

const elementsToObserve = document.querySelectorAll(
  ".neu, .image-place, .imagelogo"
);
elementsToObserve.forEach((element) => observer.observe(element));
