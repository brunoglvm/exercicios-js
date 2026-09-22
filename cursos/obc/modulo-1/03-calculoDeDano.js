// Ataque
const nomePersonagemUm = prompt('Qual o nome do seu primeiro personagem?');
const poderDeAtaque = prompt('Qual o poder de ataque do seu pesonagem?');

// Defesa
const nomePersonagemDois = prompt('Qual o nome do seu segundo personagem?');
let pontosDeVida = prompt('Quantos pontos de vida seu personagem tem?');
const poderDeDefesa = prompt('Qual o poder de defesa do seu personagem?');
const temEscudo = prompt('O seu personagem tem escudo?').toLowerCase();

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && temEscudo === 'não') {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && temEscudo === 'sim') {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
} else if (poderDeAtaque <= poderDeDefesa) {
  danoCausado = 0;
}

pontosDeVida -= danoCausado;

console.log(`Dano causado ${danoCausado} e pontos de vida ${pontosDeVida}`);
