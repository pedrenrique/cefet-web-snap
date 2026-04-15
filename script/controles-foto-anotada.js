//exercicio 4
const selectFiltro = document.querySelector('#filtro-da-foto');
const imgFoto = document.querySelector('.foto-anotada img');

selectFiltro.addEventListener('change', function () {
  imgFoto.style.filter = selectFiltro.value;
});

//desafio 1
document.querySelector('#imagem').addEventListener('change', function (e) {
  const reader = new FileReader();

  reader.addEventListener('load', function () {
    imgFoto.src = reader.result;
    imgFoto.style.filter = 'none';
    selectFiltro.value = 'none';
  });

  reader.readAsDataURL(e.target.files[0]);
});
