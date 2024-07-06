/* Chamada principal onde é carregada sempre que a página é carregada */


window.onload = function () {

    /* Adiciona um evento de click ao botão que calcula o IMC baseado nos dados passados nos inputs */
    document.getElementById('calcular').addEventListener('click', function () {

        /* Caso o botão calcular seja pressionado sem que exista valores sem preencher nos inputs, será executado o código no else informando que há campos sem preencher */
        if (calculoImc() !== 'NaN') {
            document.getElementById('resultado__imc').innerText = calculoImc();
            classificacaoImc(); // Chama a função de classificação do IMC
            testarSaidas(); // Chama a função que executa testes mocados e os exibe no console
        } else {
            document.getElementById('resultado__imc').innerText = 'Há campos vazios!';
        }

    });

    /* Adiciona o evento de click ao botão limpar dados, chamando a função limparDados() */
    document.getElementById('limpar').addEventListener('click', function () {
        limparDados();
    });
}