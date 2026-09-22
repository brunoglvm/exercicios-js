for (let ano = 1800; ano <= 2026; ano += 4) {
  const anoBissexto = ano % 100 !== 0 || ano % 400 === 0;

  if (anoBissexto) {
    console.log(`${ano} O ano é bissexto!`);
  } else {
    console.log(`${ano} O ano não é bissexto`);
  }
}
