

/** muestra el menu contextual en modo móvil */
const menuButton = document.getElementById('menu-button');
const menuButtons = document.querySelectorAll('.close-button');
const overlay = document.getElementById('overlay');

menuButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});

menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});

