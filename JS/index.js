let bar = document.getElementById("bar");
let nav = document.getElementById("navlink");
let close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
    bar.style.display = "none";
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
    bar.style.display = "flex";
    bar.style.textDecoration = "none";
  });
}
