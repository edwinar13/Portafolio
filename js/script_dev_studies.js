const titlesTraining = document.querySelectorAll(".title-training");
const btnsTraining = document.querySelectorAll(".btn-training");
const contsTraining = document.querySelectorAll(".description-training");
const imgsTraining = document.querySelectorAll(".img-training");

titlesTraining.forEach((titleTraining, indexTitle) => {
    titleTraining.addEventListener('click', () => {
        btnsTraining.forEach((btnTraining, index) => {
            btnTraining.classList.remove("btn-training-select")
            contsTraining[index].classList.remove("description-show")
            imgsTraining[index].classList.remove("img-show")
        });
        btnsTraining[indexTitle].classList.toggle("btn-training-select")
        contsTraining[indexTitle].classList.toggle("description-show")
        imgsTraining[indexTitle].classList.toggle("img-show")
    });
});

