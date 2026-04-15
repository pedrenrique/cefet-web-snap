{
  //exercicio 0
  const checkbox = document.querySelector('#visibilidade-das-marcacoes');
  const marcacoes = document.querySelectorAll('.marcacao');

  checkbox.addEventListener('input', function () {
    document.body.classList.toggle(checkbox.value, checkbox.checked);
  });

  //exercicio 2
  function atualizaControles(marcacaoEl) {
    document.querySelector('#x-da-marcacao').value = parseInt(marcacaoEl.style.left);
    document.querySelector('#y-da-marcacao').value = parseInt(marcacaoEl.style.top);
    document.querySelector('#largura-da-marcacao').value = parseInt(marcacaoEl.style.width);
    document.querySelector('#altura-da-marcacao').value = parseInt(marcacaoEl.style.height);

    document.querySelector('#titulo-da-marcacao').value = marcacaoEl.dataset.titulo;
    document.querySelector('#conteudo-da-marcacao').value = marcacaoEl.dataset.conteudo;
    document.querySelector('#cor-da-marcacao').value = marcacaoEl.dataset.cor;

    const formato = marcacaoEl.classList.contains('formato-oval') ? 'formato-oval' : 'formato-retangular';
    document.querySelector(`input[name="formato-da-marcacao"][value="${formato}"]`).checked = true;
  }

  marcacoes.forEach(function (marcacao) {
    marcacao.addEventListener('click', function () {
      marcacoes.forEach(m => m.classList.remove('selecionada'));
      marcacao.classList.add('selecionada');
      atualizaControles(marcacao);
    });
  });

  const marcacaoInicial = document.querySelector('.marcacao.selecionada');
  if (marcacaoInicial) atualizaControles(marcacaoInicial);

  //exercicio 3
  function atualizaMarcacao() {
    const selecionada = document.querySelector('.marcacao.selecionada');
    if (!selecionada) return;

    selecionada.style.left = document.querySelector('#x-da-marcacao').value + 'px';
    selecionada.style.top = document.querySelector('#y-da-marcacao').value + 'px';
    selecionada.style.width = document.querySelector('#largura-da-marcacao').value + 'px';
    selecionada.style.height = document.querySelector('#altura-da-marcacao').value + 'px';

    selecionada.dataset.titulo = document.querySelector('#titulo-da-marcacao').value;
    selecionada.dataset.conteudo = document.querySelector('#conteudo-da-marcacao').value;
    selecionada.dataset.cor = document.querySelector('#cor-da-marcacao').value;

    const formatoSelecionado = document.querySelector('input[name="formato-da-marcacao"]:checked').value;
    selecionada.classList.remove('formato-oval', 'formato-retangular');
    selecionada.classList.add(formatoSelecionado);
  }

  const campos = document.querySelectorAll('input:not([type="checkbox"]), textarea');
  campos.forEach(function (campo) {
    campo.addEventListener('input', atualizaMarcacao);
  });
}
