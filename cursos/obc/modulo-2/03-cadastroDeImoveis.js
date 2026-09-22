let imoveis = [];
let opcoes;

do {
  opcoes = prompt(
    `Imóveis cadastrados: ${imoveis.length}
    \n1. Cadastrar imóvel\n2. Mostrar ${imoveis.length > 1 ? 'imóveis' : 'imóvel'}\n3. Sair\n`,
  )
    .trim()
    .toLowerCase();

  switch (opcoes) {
    case '1':
      const nomeProprietario = prompt('Qual é o nome do proprietário?');
      const quantidadeQuartos = prompt('Quantos quartos possui o imóvel?');
      const quantidadeBanheiros = prompt('Quantos banheiros há no imóvel?');
      const possuiGaragem = prompt(
        'O imóvel possui garagem? (Sim/Não)',
      ).toLowerCase();

      const novoImovel = {
        proprietario: nomeProprietario,
        quartos: quantidadeQuartos,
        banheiros: quantidadeBanheiros,
        garagem: possuiGaragem,
      };

      imoveis.push(novoImovel);
      console.log('Imóvel cadastrado com sucesso!');
      break;

    case '2':
      if (imoveis.length > 0) {
        let mensagem = 'Lista de imóveis cadastrados:\n\n';

        for (let i = 0; i < imoveis.length; i++) {
          mensagem += `Imóvel ${i + 1}\n`;
          mensagem += `Proprietário: ${imoveis[i].proprietario}\n`;
          mensagem += `Quartos: ${imoveis[i].quartos}\n`;
          mensagem += `Banheiros: ${imoveis[i].banheiros}\n`;
          mensagem += `Possui garagem? ${
            imoveis[i].garagem === 'sim' ? 'Sim' : 'Não'
          }\n`;
          mensagem += '---------------------\n';
        }
        alert(mensagem);
      } else {
        alert('Nenhum imóvel cadastrado.');
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
