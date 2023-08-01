
let menuContainer = document.getElementById("header")
let sectionHome = document.getElementById("home")
let sectionAbout= document.getElementById("about")




window.addEventListener('scroll', function () {
  scroll_ = window.pageYOffset;
  height_ = sectionHome.clientHeight
  value = (scroll_ / height_) + 0.2

  if (value >= 0.95) {
    value = 0.7;
    menuContainer.style.background = "linear-gradient(to right, rgb(215, 150, 18, 0.95), rgb(189, 8, 79, 0.95))"
  } else {
    menuContainer.style.background = "linear-gradient(to right, rgb(215, 150, 18," + value + "), rgb(189, 8, 79," + value + "))"
  }
  menuContainer.style.boxShadow = "0px 0px 20px 2px rgb(56, 4, 87, " + value + ")"

  if (scroll_ > 100) {
    menuContainer.style.color = "rgb(250,250,250)"
  }
});




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




var indexPrev = 4
var indexNext = 0
let listCharacters = [$(".char-1"), $(".char-2"), $(".char-3"), $(".char-4"), $(".char-5")];
var characterPrev = null;
var characterNext = null;


function updateCharacter() {
  characterPrev = listCharacters[indexPrev]
  characterNext = listCharacters[indexNext]

  characterPrev.removeClass("show");
  characterPrev.addClass("hide");

  characterNext.removeClass("hide");
  characterNext.addClass("show");

  indexPrev = indexNext
  indexNext += 1;

  if (indexNext >= 5) {
    indexPrev = 4;
    indexNext = 0;
  }

}

updateCharacter();
setInterval(updateCharacter, 800);




