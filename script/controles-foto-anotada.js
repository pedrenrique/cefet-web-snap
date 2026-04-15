//exercicio 4
const selectFiltro = document.querySelector('#filtro-da-foto');
const imgFoto = document.querySelector('.foto-anotada img');

selectFiltro.addEventListener('change', function () {
  imgFoto.style.filter = selectFiltro.value;
});
