
/*
// Obtener todas las imágenes en la galería
const galleryImages = document.querySelectorAll('.gallery-image');
var bandera = true

// Agregar evento clic a cada imagen para expandirla
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    image.parentElement.classList.toggle('expanded');  
    if(bandera==true){
      disableVerticalScroll();
      bandera =false
    }else{
      enableVerticalScroll();
      bandera = true
    }

  });
  
});



function disableVerticalScroll() {
  document.body.style.overflowY = 'hidden';
}

// Desbloquear el scroll vertical
function enableVerticalScroll() {
  document.body.style.overflowY = 'auto';
}*/