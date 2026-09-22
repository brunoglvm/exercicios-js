let valores = [];
let entrada;

do {
  entrada = prompt('Digite os números').toLowerCase().trim();
  let valor = parseInt(entrada);

  if (Number.isNaN(valor)) {
    console.log('Digite apenas números');
    continue;
  }

  valores.push(valor);
} while (entrada !== 'sair');

const soma = valores.reduce((total, valor) => total + valor, 0);

console.log(soma / valores.length);
