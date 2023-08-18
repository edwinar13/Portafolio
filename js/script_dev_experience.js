var rotating = true;
const circles = document.querySelectorAll('.circle');
const areaSlide = document.querySelector('.area-slider ');




function autoRotateExperiences() {
    let x = 1;
    rotate();
    setInterval(rotate, 3000);
    function rotate() {
        if (rotating) {            
            showExperience(x);            
            x = (x % 3)+1;
        }
    }
}
autoRotateExperiences();


circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        showExperience(index+1); 
        rotating = false;  
    });
});


function showExperience(experienceNumber) {
    circleSelected(experienceNumber);

      if (experienceNumber == 1) {
        areaSlide.style.transform = 'translateX(0.222222%)';            
     } else if (experienceNumber == 2) {
        areaSlide.style.transform = `translateX(-33.33333%)`;         
     } else if (experienceNumber == 3) {
         areaSlide.style.transform = `translateX(-66.8%)`;         
     }
};

function circleSelected(experienceNumber) {
    circles.forEach(circleNoSelect => {
        circleNoSelect.classList.remove('circle-select');
    });
    circles[experienceNumber-1].classList.toggle('circle-select');
};