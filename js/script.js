

const containerDev = document.querySelector(".image-container-dev");
const containerIng = document.querySelector(".image-container-ing");
const text_ing_dev = document.querySelector(".ul-container");





containerIng.addEventListener("mouseover", function () {
  text_ing_dev.style.transform = "translateY(0%)"; // Revertimos el desplazamiento para ocultar el texto
  text_ing_dev.style.opacity = "1.0";  
});

containerDev.addEventListener("mouseover", function () {
  text_ing_dev.style.transform = "translateY(-50%)"; // Desplazamos el texto hacia arriba
  text_ing_dev.style.opacity = "1.0";  
});


containerIng.addEventListener("mouseout", function () { 
    text_ing_dev.style.transform = "translateY(-50%)"; // Desplazamos el texto hacia arriba
    text_ing_dev.style.opacity = "0.0";  
});


containerDev.addEventListener("mouseout", function () {   
    text_ing_dev.style.transform = "translateY(-0)"; // Revertimos el desplazamiento para ocultar el texto
    text_ing_dev.style.opacity = "0.0";
});




/*

const containerDev = document.querySelector(".image-container-dev");
const containerIng = document.querySelector(".image-container-ing");
const text_ing = document.querySelector(".edwin-ing");
const text_dev = document.querySelector(".edwin-dev");





containerIng.addEventListener("mouseover", function () {
  
  const windowWidth = window.innerWidth;
  if (windowWidth > 500) {
    

    text_ing.style.transform = "translateY(0)"; // Revertimos el desplazamiento para ocultar el texto
    text_ing.style.opacity = "0.7";
  }
});

containerDev.addEventListener("mouseover", function () {
  const windowWidth = window.innerWidth;
  if (windowWidth > 500) {
    

    text_dev.style.transform = "translateY(-100%)"; // Desplazamos el texto hacia arriba
    text_dev.style.opacity = "0.7";
  }
});




containerIng.addEventListener("mouseout", function () {
  const windowWidth = window.innerWidth;
  if (windowWidth > 500) {
    
    text_ing.style.transform = "translateY(-100%)"; // Desplazamos el texto hacia arriba
    text_ing.style.opacity = "0.0";
  }
});



containerDev.addEventListener("mouseout", function () {
  const windowWidth = window.innerWidth;
  if (windowWidth > 500) {
    
    text_dev.style.transform = "translateY(-0)"; // Revertimos el desplazamiento para ocultar el texto
    text_dev.style.opacity = "0.0";
  }
});

*/