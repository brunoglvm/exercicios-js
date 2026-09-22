let nomeDoTurista = prompt('Qual é o seu nome?');
let jaVisitou = prompt('Você já visitou alguma cidade?').toLowerCase();

let cidades = '';
let contagem = 0;

while (jaVisitou === 'sim') {
  let cidadeVisitada = prompt('Qual é o nome da cidade?');

  cidades += cidadeVisitada + `, `;
  contagem++;

  jaVisitou = prompt(
    'Você já visitou alguma outra cidade? ("Sim"/"Não")',
  ).toLowerCase();
}

alert(
  `Lista de todas as cidades visitadas: ${cidades} \ne a contagem é: ${contagem} cidades`,
);
