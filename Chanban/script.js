// para que al tocar una imagen abra en pantalla completa
const imagen = document.getElementById('imgcomponentes');

imagen.addEventListener('click', () => {
  imagen.classList.toggle('ampliada');
});