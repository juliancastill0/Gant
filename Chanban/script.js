const imagenes = document.querySelectorAll('img');

for (let index = 0; index < imagenes.length; index++) {
  imagenes[index].addEventListener('click', () => {
    imagenes[index].classList.toggle('ampliada');
  });

  imagenes[index].addEventListener('wheel', (e) => {
    if (imagenes[index].classList.contains('ampliada')) {
      const escala = e.deltaY > 0 ? 1.1 : 0.9; // Ajustar el factor de zoom
      imagenes[index].style.transform = `scale(${escala})`;
    }
  });
}
