const veiculoUm = prompt('Qual é a velocidade do veículo 1?');
const veiculoDois = prompt('Qual é a velocidade do veículo 2?');

if (veiculoUm > veiculoDois) {
  console.log(`A velocidade de ${veiculoUm} é maior que ${veiculoDois}`);
} else if (veiculoDois > veiculoUm) {
  console.log(`A velocidade de ${veiculoDois} é maior que ${veiculoUm}`);
} else {
  console.log(`Ambos tem a mesma velocidade!`);
}
