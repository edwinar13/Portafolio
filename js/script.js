const text_ing = document.querySelector(".edwin-ing");
const container_ing = document.querySelector(".image-container-ing");

container_ing.addEventListener("mouseover", function() {
  text_ing.style.transform = "translateY(0)"; // Revertimos el desplazamiento para ocultar el texto
  text_ing.style.opacity = "0.7";
});

container_ing.addEventListener("mouseout", function() {
  text_ing.style.transform = "translateY(-100%)"; // Desplazamos el texto hacia arriba
  text_ing.style.opacity = "0.0";
});


const text_dev = document.querySelector(".edwin-dev");
const container_dev = document.querySelector(".image-container-dev");

container_dev.addEventListener("mouseover", function() {
  text_dev.style.transform = "translateY(-100%)"; // Desplazamos el texto hacia arriba
  text_dev.style.opacity = "0.7";
});

container_dev.addEventListener("mouseout", function() {
  text_dev.style.transform = "translateY(-0)"; // Revertimos el desplazamiento para ocultar el texto
  text_dev.style.opacity = "0.0";
});



