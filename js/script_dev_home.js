

const downloadCv = document.querySelector('.download-cv');
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

