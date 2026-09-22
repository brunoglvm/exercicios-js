let opcoes;

do {
  opcoes = Number(
    prompt(`
    1. Opção 1
    2. Opção 2
    3. Opção 3
    4. Opção 4
    5. Encerrar`),
  );

  switch (opcoes) {
    case 1:
      console.log(`Você escolheu a opção ${opcoes}.`);
      break;
    case 2:
      console.log(`Você escolheu a opção ${opcoes}.`);
      break;
    case 3:
      console.log(`Você escolheu a opção ${opcoes}.`);
      break;
    case 4:
      console.log(`Você escolheu a opção ${opcoes}.`);
      break;
    case 5:
      console.log('Programa encerrando...');
      break;
    default:
      console.log('Opção inválida, tente novamente.');
  }
} while (opcoes !== 5);

console.log(`Programa encerrado.`);
