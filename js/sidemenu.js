const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menu = document.getElementById("sidebar");

openMenu.addEventListener("click", () => {
  menu.style.left = 0;
  openMenu.style.display = "none";
  closeMenu.style.display = "inline-block";
});
closeMenu.addEventListener("click", () => {
  menu.style.left = "-100vw";
  openMenu.style.display = "inline-block";
  closeMenu.style.display = "none";
});
