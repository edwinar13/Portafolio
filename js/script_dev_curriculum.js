function startAnimation() {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');

    input.style.width = '0';
    button.classList.add('button-flying');

    setTimeout(() => {
        input.style.display = 'none';
        button.innerHTML = '<div class="plane"></div>';
    }, 500);

    setTimeout(() => {
        button.classList.remove('button-flying');
        button.style.width = 'auto';
        button.style.height = 'auto';
        button.innerHTML = 'Enviar';
        input.style.display = 'block';
        input.style.width = '100%';
    }, 4000);
}

/*
const shape1 = document.getElementById('shape1');

shape1.addEventListener('mouseover', () => {
    shape1.setAttribute('d', "M100 25 L175 150 L25 150 Z");
});

shape1.addEventListener('mouseout', () => {
    shape1.setAttribute('d', "M50 50 H150 V150 H50 Z");
});
*/



