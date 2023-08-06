

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");


const btns = document.querySelectorAll('.btn-skill');
const cards = document.querySelectorAll('.card-skill');
const cardDestock = document.querySelectorAll('.destock');
const cardWeb = document.querySelectorAll('.web');
const cardMobile = document.querySelectorAll('.mobile');
const cardDb = document.querySelectorAll('.db');
const cardHardware = document.querySelectorAll('.hardware');
const cardTools = document.querySelectorAll('.tool');






btn1.addEventListener('click', () => {
  clearCardBtn()
  btn1.classList.add(`btn-skill-selected`);
  cardDestock.forEach(cardVisible => {
    cardVisible.style.display = "flex";
  });
});



btn2.addEventListener('click', () => {
  clearCardBtn()
  btn2.classList.add(`btn-skill-selected`);
  cardWeb.forEach(cardVisible => {
    cardVisible.style.display = "flex";
    
  });
});


btn3.addEventListener('click', () => {
  clearCardBtn()
  btn3.classList.add(`btn-skill-selected`);
  cardMobile.forEach(cardVisible => {
    cardVisible.style.display = "flex";
    
  });
});



btn4.addEventListener('click', () => {
  clearCardBtn()
  btn4.classList.add(`btn-skill-selected`);
  cardDb.forEach(cardVisible => {
    cardVisible.style.display = "flex";

  });
});


btn5.addEventListener('click', () => {
  clearCardBtn()
  btn5.classList.add(`btn-skill-selected`);
  cardHardware.forEach(cardVisible => {
    cardVisible.style.display = "flex";

  });
});

btn6.addEventListener('click', () => {
  clearCardBtn()
  btn6.classList.add(`btn-skill-selected`);
  cardTools.forEach(cardVisible => {
    cardVisible.style.display = "flex";

  });
});






btn7.addEventListener('click', () => {
  btns.forEach(btn => {
    btn.classList.remove(`btn-skill-selected`);
  }); 
  cards.forEach(card => {
    card.style.display = "flex";
  }); 

});





function clearCardBtn() {
  btns.forEach(btn => {
    btn.classList.remove(`btn-skill-selected`);
  });
  cards.forEach(card => {
    card.style.display = "none";
  });  
}












/**
 
img.classList.add(`transformed${index + 1}`);
img.classList.remove(`transformed${index + 1}`);



const downloadCv = document.querySelector('.download-cv');
const imagesCv = document.querySelector('.container-cv-img');
const images = document.querySelectorAll('.container-cv-img img');

downloadCv.addEventListener('mouseover', () => {
  images.forEach((img, index) => {
    img.classList.add(`transformed${index + 1}`);
    console.log(`transformed${index + 1}`)
  });
});

downloadCv.addEventListener('mouseout', () => {
  images.forEach((img, index) => {
    img.classList.remove(`transformed${index + 1}`);
  });
});

imagesCv.addEventListener('mouseover', () => {
  images.forEach((img, index) => {
    img.classList.add(`transformed${index + 1}`);
    console.log(`transformed${index + 1}`)
  });
});

imagesCv.addEventListener('mouseout', () => {
  images.forEach((img, index) => {
    img.classList.remove(`transformed${index + 1}`);
  });
});



*/














/**
 * 

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
}










const cardFront = document.querySelector(".card-2 .front");
const cardBack = document.querySelector(".card-2 .back");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    cardFront.style.transform = " rotateY(180deg)";
    cardBack.style.transform = " rotateY(360deg)";
  } else {
    cardFront.style.transform = " rotateY(0deg)";
    cardBack.style.transform = " rotateY(180deg)";
  }
});

*/