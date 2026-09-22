let cartas = [];
let opcoes;

do {
  opcoes = prompt(
    `Quantidade de cartas: ${cartas.length}
    \n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair\n`,
  )
    .trim()
    .toLowerCase();

  switch (opcoes) {
    case '1':
      const novaCarta = prompt('Insira o nome da carta!').trim();

      if (!novaCarta) {
        alert('O nome da carta não pode ser vazio!');
      } else {
        cartas.unshift(novaCarta);
      }

      break;

    case '2':
      if (cartas.length === 0) {
        alert(
          `A pilha de cartas está vazia!\nQuantidade de cartas: ${cartas.length}`,
        );
      } else {
        const cartaSelecionada = cartas.shift();
        alert(`Você selecionou a carta "${cartaSelecionada}"`);
      }
      break;

    case '3':
    case 'sair':
      console.log('Finalizando o programa...');
      break;

    default:
      alert('Opção inválida.');
      break;
  }
} while (opcoes !== '3' && opcoes !== 'sair');
console.log('Programa finalizado.');
