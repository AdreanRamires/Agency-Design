const mobileNav = document.getElementById("mobile-nav");
const mobileNavMenu = document.getElementById("mobile-nav-ul");

const appStates = {
  menuOpenClosed: false,
};

mobileNav.addEventListener("click", () => {
  if (appStates.menuOpenClosed) {
    mobileNavMenu.style.display = "none";
    appStates.menuOpenClosed = false;
  } else {
    mobileNavMenu.style.display = "flex";
    appStates.menuOpenClosed = true;
  }
});
