let alvo1 = parseFloat(prompt('Escolha o primeiro número:'));
let alvo2 = parseFloat(prompt('Escolha o segundo número:'));

let dado1;
let dado2;

let tentativas = 0;

const VALIDO = !isNaN(alvo1) && !isNaN(alvo2) && alvo1 >= 1 && alvo1 <= 6 && alvo2 >= 1 && alvo2 <= 6;

if (!VALIDO) {
  console.log('Digite apenas números entre 1 e 6.');
  console.log('Números inválidos');
} else {
  do {
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    tentativas++;

    console.log(dado1, dado2);
  } while (alvo1 !== dado1 || alvo2 !== dado2);

  console.log(`Números válidos\nTentativas: ${tentativas}`);
}
