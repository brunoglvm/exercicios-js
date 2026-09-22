let palavra = prompt(
  'Bem-vindo ao Procurando Palíndromos. Por favor, forneça a palavra para análise:',
);

let palavraInvertida = '';

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavraInvertida === palavra) {
  console.log('A palavra fornecida é um palíndromo.');
} else {
  console.log('A palavra fornecida não é um palíndromo.');
}

console.log(`Palavra original: ${palavra}`);
console.log(`Palavra invertida: ${palavraInvertida}`);
