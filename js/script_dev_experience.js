const experienceSlide = document.querySelector('.experience-slide');
const areaSlide = document.querySelector('.area-slider ');
const experience1Cells = document.querySelectorAll('.cell-exp1');
const experience2Cells = document.querySelectorAll('.cell-exp2');
const experience3Cells = document.querySelectorAll('.cell-exp3');
const experienceCells = document.querySelectorAll('.cell');
const circles = document.querySelectorAll('.circle');
var rotating = true;

function showExperience(experienceNumber) {
    const windowWidth = window.innerWidth;
    let marginTopValue = 0;
    let rows = 0;

    if (windowWidth <= 500) {
        marginTopValue = 100;
        rows = 5;
    } else if (windowWidth <= 800) {
        marginTopValue = 100;
        rows = 4;
    } else if (windowWidth <= 1150) {
        marginTopValue = 150;
        rows = 4;
    } else if (windowWidth <= 1600) {
        marginTopValue = 150;
        rows = 3;
    } else {
        marginTopValue = 215;
        rows = 3;
    }

    experienceCells.forEach(cell => {
        cell.style.opacity = 0.1
    });
    circles.forEach(circle => {
        circle.style = 'background-color: rgb(96, 194, 177)'
    });


    if (experienceNumber == 1) {
        circles[0].style = 'background-color: rgb(90, 4, 7);'       
       areaSlide.style.transform = 'translateY(0px)';
       
       experience1Cells.forEach(experience1Cell => {
           experience1Cell.style.opacity = 1.0
        });
        
    } else if (experienceNumber == 2) {
        circles[1].style = 'background-color: rgb(90, 4, 7);'
       areaSlide.style.transform = `translateY(-${marginTopValue * (experienceNumber - 1) * rows}px)`;
       experience2Cells.forEach(experience2Cell => {
           experience2Cell.style.opacity = 1.0
        });
        
    } else if (experienceNumber == 3) {
        circles[2].style = 'background-color: rgb(90, 4, 7);'
        areaSlide.style.transform = `translateY(-${marginTopValue * (experienceNumber - 1) * rows}px)`;
        experience3Cells.forEach(experience3Cell => {
            experience3Cell.style.opacity = 1.0
        });
    }
};



circles.forEach(circle => {
    circle.addEventListener('click', () => {
        rotating = false;

    });
});




function handleWindowResize() {
    showExperience(1);
}
window.addEventListener('resize', handleWindowResize);




function autoRotateExperiences() {
    let x = 1;
    function rotate() {
        if (rotating) {
            showExperience(x);
            x = (x % 3) + 1;
        }
    }
    setInterval(rotate, 3000);
}
autoRotateExperiences();