const maxSomasPares = 10;

let jogadas = 0; // quantidade de jogadas contabilizadas
let somasPares = 0; // quantidade de vezes que a soma foi par

do {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  if (dado1 === dado2) {
    console.log(`${dado1} = ${dado2} [Dados iguais - não contabilizado]`);
    continue;
  }

  jogadas++;

  const soma = dado1 + dado2;
  const isPar = soma % 2 === 0;

  console.log(`Jogada ${jogadas}: ${dado1} + ${dado2} = ${soma} ${isPar ? '[Par]' : '[Ímpar]'}`);

  if (isPar) {
    somasPares++;
  }
} while (somasPares < maxSomasPares);

console.log(`-------------------------
Total de jogadas: ${jogadas}`);
