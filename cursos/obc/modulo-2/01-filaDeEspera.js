let fila = [];
let opcoes;

do {
  let pacientes = '';
  for (let i = 0; i < fila.length; i++) {
    pacientes += `${i + 1} - ${fila[i]}\n`;
  }

  opcoes = Number(
    prompt(
      `Pacientes:\n${pacientes}\n1. Novo Paciente\n2. Consultar Paciente\n3. Sair\n`,
    ),
  );

  switch (opcoes) {
    case 1:
      fila.push(prompt('Insira o nome do paciente:'));
      break;

    case 2:
      if (fila.length === 0) {
        alert('A fila está vazia.');
      } else {
        const paciente = fila.shift();
        alert(`Paciente "${paciente}" consultado!`);
      }
      break;

    case 3:
      console.log('Finalizando o programa...');
      break;

    default:
      alert('Opção inválida.');
      break;
  }
} while (opcoes !== 3);
console.log('Programa finalizado.');
