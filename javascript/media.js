// Caucule a média de 3 números

// Exemplo 1: Usando um for loop para somar os números em um array
const numeros = [1, 25, 50,];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = soma / numeros.length;
console.log(`A média dos números é: ${media}`); 

// Exemplo 2: Usando o método reduce()
const numeros2 = [5, 15, 25];
const soma2 = numeros2.reduce((acumulador, numero) => acumulador + numero, 0);
const media2 = soma2 / numeros2.length;
console.log(`A média dos números é: ${media2}`); 
