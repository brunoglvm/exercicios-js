let nome = prompt('Qual é o seu nome?');
let sobrenome = prompt('Qual é o seu sobrenome?');
let campoDeEstudo = prompt('Qual é o seu campo de estudo?');
let anoDeNascimento = Number(prompt('Qual é o seu ano de nascimento?'));

const anoAtual = new Date().getFullYear();

alert(
  `\nNome Completo: ${nome} ${sobrenome}
  \nCampo de Estudo: ${campoDeEstudo}
  \nIdade: ${anoAtual - anoDeNascimento}`,
);
