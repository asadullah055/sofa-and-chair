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
// clickable button

function copyCoupon(e) {
  let text = e.innerHTML.trim();
  navigator.clipboard.writeText(text);
  e.innerHTML = "Copied!";
  setInterval(() => {
    e.innerHTML = text;
  }, 1000);
}

// for coming soon
