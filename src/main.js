const openBtn = document.querySelector("#open-btn");
const nav = document.querySelector(".navbar-nav");
const closeBtn = document.getElementById("closeBtn");
// button

// for responsive menu
openBtn.addEventListener("click", () => {
  nav.classList.add("active");
  openBtn.classList.add("hide");
});
closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  openBtn.classList.remove("hide");
});


// for coming soon
