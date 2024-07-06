window.onload = function () {
    document.getElementById('calcular').addEventListener('click', function () {

        if (calculoImc() !== 'NaN') {
            document.getElementById('resultado__imc').innerText = calculoImc();
            classificacaoImc();
        } else {
            document.getElementById('resultado__imc').innerText = 'Há campos vazios!';
        }
    });

    document.getElementById('limpar').addEventListener('click', function () {
        limparDados();
    });

    function calculoImc() {
        let altura = document.getElementById('altura').value;
        let peso = document.getElementById('peso').value;
        let imc = (parseFloat(peso) / Math.pow(parseFloat(altura), 2)).toFixed(2);
        fadeInAnimation('resultado__imc');

        return imc;
    }

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

    function fadeInAnimation(id) {
        document.getElementById(id).classList.add('fadeInAnimation');
    }

    function limparDados() {
        location.reload();
    }
}