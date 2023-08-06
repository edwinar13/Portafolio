


var indexPrev = 2
var indexNext = 0
let listCharacters = [$(".char-1"), $(".char-2"), $(".char-3")];
var characterPrev = null;
var characterNext = null;


function updateCharacter() {
  characterPrev = listCharacters[indexPrev]
  characterNext = listCharacters[indexNext]

  characterPrev.removeClass("show"); 
  characterNext.addClass("show");

  indexPrev = indexNext
  indexNext += 1;

  if (indexNext >= 3) {
    indexPrev = 2;
    indexNext = 0;
  }

}

updateCharacter();
setInterval(updateCharacter, 800);








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






const imageCv = document.querySelector('.container-cv-img');
downloadCv.addEventListener('click', downloadCV);
imageCv.addEventListener('click', downloadCV);

function downloadCV() {
    const pdfFilePath = 'recurses/cvs/EDWIN_CV.pdf';

    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'EDWIN_CV.pdf';

    link.click();
}

