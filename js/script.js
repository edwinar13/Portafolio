

const containerDev = document.querySelector(".image-container-dev");
const containerIng = document.querySelector(".image-container-ing");
const iconPte = document.querySelector(".icon-pte");
const iconCode = document.querySelector(".icon-code");
const text_ing_dev = document.querySelector(".ul-container");



function showText1() {
  text_ing_dev.style.transform = "translateY(0%)";
  text_ing_dev.style.opacity = "1.0";
}
containerIng.addEventListener("mouseover", showText1);
iconPte.addEventListener("mouseover", showText1);


function showText2() {
  text_ing_dev.style.transform = "translateY(-50%)";
  text_ing_dev.style.opacity = "1.0"; 
}
containerDev.addEventListener("mouseover", showText2);
iconCode.addEventListener("mouseover", showText2);




function hideText1() {
  text_ing_dev.style.transform = "translateY(-50%)"; 
  text_ing_dev.style.opacity = "0.0";  
}
containerIng.addEventListener("mouseout", hideText1);
iconPte.addEventListener("mouseout", hideText1);


function hideText2() {
  text_ing_dev.style.transform = "translateY(-0)"; 
  text_ing_dev.style.opacity = "0.0"; 
}
containerDev.addEventListener("mouseout", hideText2);
iconCode.addEventListener("mouseout", hideText2);


















sendData()


function sendData() {
  const dateCurrent = new Date();
  const url = 'https://flask-production-49a1.up.railway.app/api/clickdev';
  const data = {
      date: dateCurrent
  };

  fetch(url, {

      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });
}


