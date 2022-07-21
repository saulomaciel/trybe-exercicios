let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma = 0;
media = 0;
maiorValor = 0;
quantidadeDeValoresImpares = 0;
menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index]
    }
    soma += numbers[index];
    media = soma / numbers.length;
    if (numbers[index] % 2 !== 0) {
        quantidadeDeValoresImpares += 1;
    }
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}

console.log('a array numbers possui ' + numbers.length + ' valores.')
console.log('a soma dos valores é igual a ' + soma);
console.log('a média dos valores é igual a ' + media);
if (media > 20){
    console.log('valor da média é maior que 20.')
}
else {
    console.log('valor da média é menor ou igual a 20.')
}
console.log('o maior valor é ' + maiorValor)
if (quantidadeDeValoresImpares > 0) {
    console.log('há ' + quantidadeDeValoresImpares + ' valores ímpares')
} 
else {
    console.log('nenhum valor ímpar encontrado.')
}
console.log('o menor valor é ' + menorValor);

let arrayDoExercicio8 = []
for (contador = 1; contador <= 25; contador += 1) {
    arrayDoExercicio8.push(contador)
}
console.log(arrayDoExercicio8);

let divididoPorDois = []
for (let index = 0; index < arrayDoExercicio8.length; index += 1) {
    let resultado = arrayDoExercicio8[index] / 2;
    divididoPorDois.push(resultado)
    console.log(arrayDoExercicio8[index] + ' dividido por 2 é igual a ' + divididoPorDois[index])
}