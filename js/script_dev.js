
let menuContainer = document.getElementById("header")
let sectionHome = document.getElementById("home")
let sectionAbout = document.getElementById("about")
let menuDownloadCV = document.getElementById("menu-download-cv")




window.addEventListener('scroll', function () {
  scroll_ = window.pageYOffset;
  height_ = sectionHome.clientHeight
  value = (scroll_ / height_) + 0.2

  if (value >= 0.95) {
    value = 0.7;
    menuContainer.style.background = "linear-gradient(to right, rgb(215, 150, 18, 0.95), rgb(189, 8, 79, 0.95))"
    menuDownloadCV.style.display = 'block';


  } else {
    menuContainer.style.background = "linear-gradient(to right, rgb(215, 150, 18," + value + "), rgb(189, 8, 79," + value + "))"
    menuDownloadCV.style.display = 'none';

  }
  menuContainer.style.boxShadow = "0px 0px 20px 2px rgb(56, 4, 87, " + value + ")"

  if (scroll_ > 100) {
    menuContainer.style.color = "rgb(250,250,250)"
  }
});



/*
let aboutContainer = $(".about-container")


window.addEventListener('scroll', function () {
  scrollSection = window.pageYOffset;
  heightHome = sectionHome.clientHeight
  widthHome = sectionHome.clientWidth  
  if(scrollSection>=heightHome/2){
    aboutContainer.addClass("about-container-next")
  }if(scrollSection<=10){
    aboutContainer.removeClass("about-container-next")    
  }
});



*/



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

