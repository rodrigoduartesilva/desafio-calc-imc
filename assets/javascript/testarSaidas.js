function testarSaidas() {
    let altura = 1.80;
    let peso = [50, 60, 85, 120];

    for (let index = 0; index < peso.length; index++) {

        let imc = (parseFloat(peso[index]) / Math.pow(parseFloat(altura), 2)).toFixed(2);

        console.log(`Saida: ${index + 1}`);

        if (imc < 18.5) {
            saidaLog(altura, peso[index], imc);
            console.log('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            saidaLog(altura, peso[index], imc);
            console.log('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            saidaLog(altura, peso[index], imc);
            console.log('Sobrepeso');
        } else {
            saidaLog(altura, peso[index], imc);
            console.log('Obesidade');
        }

        function saidaLog(altura, peso, imc) {
            console.log(`Altura: ${altura}`);
            console.log(`Peso: ${peso}`);
            console.log(`IMC: ${imc}`);
        }

        console.log('\n');
    }
}