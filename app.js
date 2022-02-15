const mobileNav = document.getElementById("mobile-nav");
const mobileNavMenu = document.getElementById("mobile-nav-ul");

const appStates = {
  menuOpenClosed: false,
};

document.addEventListener("click", (e) => {
  if (e.target.className == 'hamburger-menu' || e.target.className == 'ham-line') {
    if (appStates.menuOpenClosed) {
      appStates.menuOpenClosed = false;
      mobileNavMenu.style.display = 'none';      
    }
    else {
      appStates.menuOpenClosed = true;
      mobileNavMenu.style.display = 'flex';
    }
  }else {
    if (appStates.menuOpenClosed) {
      appStates.menuOpenClosed = false;
      mobileNavMenu.style.display = 'none';
    }
  }
  
});
