const numeros = [32, 45, 49, 32, 93, 11, 81, 14];

const impares = numeros.filter((numero) => numero % 2 !== 0);
const soma = impares.reduce((acc, cur) => acc + cur, 0);

console.log(`${impares.join(' + ')} = ${soma}`);
