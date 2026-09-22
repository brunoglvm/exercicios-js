const numeros = [32, 45, 49, 32, 93, 11, 81, 14];
let expressao = '';
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    soma += numeros[i];
    expressao += `${numeros[i]} + `;
  }
}

console.log(`${expressao.slice(0, -3)} = ${soma}`);
