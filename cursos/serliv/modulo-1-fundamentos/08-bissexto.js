/* Um ano é bissexto se for divisível por 4 E não for divisível por 100,
OU se for divisível por 400
*/

for (let ano = 2000; ano <= 2026; ano++) {
  const anoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

  if (anoBissexto) {
    console.log(`${ano} O ano é bissexto!`);
  } else {
    console.log(`${ano} O ano não é bissexto`);
  }
}
