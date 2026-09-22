let dado1;
let dado2;

let count = 0;

do {
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;

  count++;
  console.log(`${dado1}, ${dado2} | Rodada: ${count}`);
} while (dado1 !== dado2);

console.log(`\nOs dados ficaram iguais após ${count} rodada(s).`);
