let menuContainer = document.getElementById("header")
let sectionHome = document.getElementById("home")
let sectionAbout = document.getElementById("about")
let menuDownloadCV = document.getElementById("menu-download-cv")


/** muestra sección para descargar CV */
window.addEventListener('scroll', function () {
  scroll_ = window.pageYOffset;
  height_ = sectionHome.clientHeight
  value = (scroll_ / height_) + 0.2

  if (value >= 0.95) {
    value = 0.95;
    menuDownloadCV.style.display = 'block';
  } else {
    menuDownloadCV.style.display = 'none';
  }
  document.documentElement.style.setProperty("--box-shadow-value", value);
  document.documentElement.style.setProperty("--gradient-value", value);
});




/** muestra el menu contextual en modo móvil */
const menuButton = document.getElementById('menu-button');
const menuButtons = document.querySelectorAll('.close-button');
const overlay = document.getElementById('overlay');

menuButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});

menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});

