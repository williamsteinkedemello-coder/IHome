const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");

burger.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

document.getElementById("learnMoreBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
