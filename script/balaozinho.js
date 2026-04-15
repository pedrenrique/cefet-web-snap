{
  //exercicio 1
  const balaozinho = document.querySelector('#balaozinho');
  const marcacoes = document.querySelectorAll('.marcacao');

  marcacoes.forEach(function (marcacao) {
    marcacao.addEventListener('mouseover', function () {
      balaozinho.innerHTML = `<h2>${marcacao.dataset.titulo}</h2><p>${marcacao.dataset.conteudo}</p>`;
      balaozinho.style.color = marcacao.dataset.cor;
    });

    marcacao.addEventListener('mouseout', function () {
      balaozinho.innerHTML = '';
    });

    marcacao.addEventListener('mousemove', function (e) {
      balaozinho.style.left = e.pageX + 'px';
      balaozinho.style.top = e.pageY + 'px';
    });
  });
}
