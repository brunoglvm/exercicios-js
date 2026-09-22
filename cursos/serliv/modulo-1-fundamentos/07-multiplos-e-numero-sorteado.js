/*
Mostre na tela os números de 0 a 100 ignorando os múltiplos de 10.
Porém, a cada interação, sorteie um número de 1 a 100.
Se o número mostrado for divisível pelo número sorteado, interrompa o loop.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log('---');
    continue;
  }

  console.log(i);

  const numeroSorteado = Math.floor(Math.random() * 100) + 1;
  console.log(`Número sorteado: ${numeroSorteado}`);

  if (i % numeroSorteado === 0) {
    break;
  }
}
