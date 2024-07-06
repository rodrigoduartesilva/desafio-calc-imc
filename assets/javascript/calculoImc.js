/* Função que calcula o imc usando os valores passados no input da página principal */

function calculoImc() {
    let altura = document.getElementById('altura').value; /* Atribui a variável altura o valor digitado no input correspondente */
    let peso = document.getElementById('peso').value; /* Atribui a variável peso o valor digitado no input correspondente */
    let imc = (parseFloat(peso) / Math.pow(parseFloat(altura), 2)).toFixed(2); /* Calcula o imc baseado nos valores informados dentro dos inputs na página principal, também é usado o método "pow" do objeto Math tendo como objetivo, calcular a potência da variável altura */
    fadeInAnimation('resultado__imc'); /* Chamada da funçao que adiciona um efeito quando as informações do IMC aparecem em tela */

    return imc;
}