let saldo = parseFloat(prompt('Forneça a quantidade de dinheiro inicial:'));

let opcoes;

do {
  opcoes = Number(
    prompt(`Você tem ${saldo.toFixed(2)}$
    Deseja:
    1. Adicionar
    2. Remover
    3. Sair`),
  );

  switch (opcoes) {
    case 1:
      saldo += parseFloat(prompt('Quanto você deseja adicionar?')) || 0;
      break;
    case 2:
      saldo -= parseFloat(prompt('Quanto você deseja remover?')) || 0;
      break;
    case 3:
      console.log('Programa encerrando...');
      break;
    default:
      alert('Opção inválida');
      break;
  }
} while (opcoes !== 3);

console.log('Programa encerrado.');
