const numeros = [3, 43, 32, 54, 12, 54, 12, 4, 65, 46, 53];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(`A soma de todos os números é: ${soma}`);

console.log(`A soma de todos os números é: ${numeros.reduce((acc, curr) => acc + curr, 0)}`);
