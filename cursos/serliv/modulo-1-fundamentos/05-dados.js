const maxSomasPares = 10;

let jogadas = 0; // quantidade total de vezes que os dados foram jogados
let somasPares = 0; // quantidade de vezes que a soma foi par

do {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  const soma = dado1 + dado2;

  jogadas++;

  if (soma % 2 !== 0) {
    console.log(`Jogada ${jogadas}: ${dado1} + ${dado2} = ${soma} [Ímpar]`);
    continue;
  }

  somasPares++;
  console.log(`Jogada ${jogadas}: ${dado1} + ${dado2} = ${soma} [Par ${somasPares}/${maxSomasPares}]`);
} while (somasPares < maxSomasPares);

console.log(`Total de jogadas: ${jogadas}`);
