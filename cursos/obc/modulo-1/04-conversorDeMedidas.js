const valorFornecido = Number(prompt('Forneça o valor em metros!'));
const unidadeDeMedida = prompt(
  'Qual unidade de medida? mm | cm | dm | dam | hm | km',
).toLowerCase();

switch (unidadeDeMedida) {
  case 'mm': // milímetro
    console.log(`O valor em MM é = ${valorFornecido * 1000}`);
    break;

  case 'cm': // centímetro
    console.log(`O valor em CM é = ${valorFornecido * 100}`);
    break;

  case 'dm': // decímetro
    console.log(`O valor em DM é = ${valorFornecido * 10}`);
    break;

  case 'dam': // decâmetro
    console.log(`O valor em DAM é = ${valorFornecido / 10}`);
    break;

  case 'hm': // hectômetro
    console.log(`O valor em HM é = ${valorFornecido / 100}`);
    break;

  case 'km': // quilômetro
    console.log(`O valor em KM é = ${valorFornecido / 1000}`);
    break;

  default:
    console.log('Opção inválida');
    break;
}
