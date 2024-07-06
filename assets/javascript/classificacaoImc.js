/* Função que insere um texto no html da pagina principal informando a classificação do usuário baseado em seu IMC */

function classificacaoImc() {
    let classificacao = document.getElementById('classificacao__imc');

    if (calculoImc() < 18.5) {
        classificacao.innerText = 'Abaixo do peso';
    } else if (calculoImc() >= 18.5 && calculoImc() < 25) {
        classificacao.innerText = 'Peso normal';
    } else if (calculoImc() >= 25 && calculoImc() < 30) {
        classificacao.innerText = 'Sobrepeso';
    } else {
        classificacao.innerText = 'Obesidade';
    }

    fadeInAnimation('classificacao__imc');
}