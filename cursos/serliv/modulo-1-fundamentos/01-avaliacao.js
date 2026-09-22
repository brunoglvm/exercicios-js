let n1 = parseFloat(prompt('Digite um número entre 0 - 10'));
let n2 = parseFloat(prompt('Digite outro número entre 0 - 10'));

if (isNaN(n1) || isNaN(n2)) {
  console.log('Digite um número válido!');
} else if (n1 < 0 || n2 < 0 || n1 > 10 || n2 > 10) {
  console.log('Digite outro número entre 0 - 10');
} else {
  let media = (n1 + n2) / 2;
  if (media > 4 && n1 > 0 && n2 > 0) {
    console.log('Aluno aprovado!');
  } else {
    console.log('Aluno reprovado');
  }
}
