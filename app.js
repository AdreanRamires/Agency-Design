// MOBILE NAV CLICK AWAY CLOSING MENU

const mobileNav = document.getElementById("mobile-nav");
const mobileNavMenu = document.getElementById("mobile-nav-ul");

const appStates = {
  menuOpenClosed: false,
};

document.addEventListener("click", (e) => {
  if (
    e.target.className == "hamburger-menu" ||
    e.target.className == "ham-line"
  ) {
    if (appStates.menuOpenClosed) {
      appStates.menuOpenClosed = false;
      mobileNavMenu.style.display = "none";
    } else {
      appStates.menuOpenClosed = true;
      mobileNavMenu.style.display = "flex";
    }
  } else {
    if (appStates.menuOpenClosed) {
      appStates.menuOpenClosed = false;
      mobileNavMenu.style.display = "none";
    }
  }
});

//

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
