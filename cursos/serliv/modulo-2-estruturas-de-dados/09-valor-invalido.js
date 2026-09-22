const valoresDiversos = [null, 'bruno', 56, [], {}, 23, 435, NaN, 'glvm', undefined];
let encontrou = false;

for (let i = 0; i < valoresDiversos.length; i++) {
  const valor = valoresDiversos[i];
  const valorInvalido = valor === null || valor === undefined || Number.isNaN(valor);

  if (valorInvalido) {
    encontrou = true;
    console.log(valor);
    break;
  }
}

console.log(encontrou ? 'Valor inválido encontrado.' : 'Nenhum valor inválido encontrado.');
