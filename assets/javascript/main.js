window.onload = function () {
    document.getElementById('calcular').addEventListener('click', function () {

        if (calculoImc() !== 'NaN') {
            document.getElementById('resultado__imc').innerText = calculoImc();
            classificacaoImc();
            testarSaidas();
        } else {
            document.getElementById('resultado__imc').innerText = 'Há campos vazios!';
        }

    });

    document.getElementById('limpar').addEventListener('click', function () {
        limparDados();
    });
}