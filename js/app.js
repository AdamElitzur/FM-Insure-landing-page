const hamburger = document.querySelector(".nav-hamburger");
const nav_links = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  nav_links.classList.toggle("nav-links-shown");
  console.log("hi");
});
