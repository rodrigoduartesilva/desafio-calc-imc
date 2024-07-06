function calculoImc() {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let imc = (parseFloat(peso) / Math.pow(parseFloat(altura), 2)).toFixed(2);
    fadeInAnimation('resultado__imc');

    return imc;
}