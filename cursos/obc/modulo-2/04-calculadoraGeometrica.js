const areaDoTriangulo = () => {
  const base = Number(prompt('Forneça a base'));
  const altura = Number(prompt('Forneça a altura'));
  return (base * altura) / 2;
};

const areaDoRetangulo = () => {
  const base = Number(prompt('Forneça a base'));
  const altura = Number(prompt('Forneça a altura'));
  return base * altura;
};

const areaDoQuadrado = () => {
  const lado = Number(prompt('Forneça o lado'));
  return lado * lado;
};

const areaDoTrapezio = () => {
  const baseMaior = Number(prompt('Forneça a base maior'));
  const baseMenor = Number(prompt('Forneça a base menor'));
  const altura = Number(prompt('Forneça a altura'));
  return ((baseMaior + baseMenor) * altura) / 2;
};

const areaDoCirculo = () => {
  const raio = Number(prompt('Forneça o raio'));
  const piArredondado = +Math.PI.toFixed(2);
  return piArredondado * raio * raio;
};

let opcoes;

do {
  opcoes = prompt(
    `Escolha uma das opções abaixo para calcular a área da forma geométrica desejada:
    \n1. Área do Triângulo\n2. Área do Retângulo\n3. Área do Quadrado\n4. Área do Trapézio\n5. Área do Círculo\n6. Sair\n`,
  )
    .trim()
    .toLowerCase();

  switch (opcoes) {
    // Área do Triângulo
    case '1':
      alert(`Área do Triângulo: ${areaDoTriangulo()}`);
      break;

    // Área do Retângulo
    case '2':
      alert(`Área do Retângulo: ${areaDoRetangulo()}`);
      break;

    // Área do Quadrado
    case '3':
      alert(`Área do Quadrado: ${areaDoQuadrado()}`);
      break;

    // Área do Trapézio
    case '4':
      alert(`Área do Trapézio: ${areaDoTrapezio()}`);
      break;

    // Área do Círculo
    case '5':
      alert(`Área do Círculo: ${areaDoCirculo()}`);
      break;

    case '6':
    case 'sair':
      console.log('Finalizando o programa...');
      break;

    default:
      alert('Opção inválida.');
  }
} while (opcoes !== '6' && opcoes !== 'sair');
console.log('Programa finalizado.');
