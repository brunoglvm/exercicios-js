/**
 * Verifica se um ano é bissexto.
 * @param {number} ano - Ano a ser verificado.
 * @returns {boolean} Se o ano é bissexto.
 */
const isBissexto = (ano) => (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

const ano = 2000;
const bissexto = isBissexto(ano);

console.log(`${ano} ${bissexto ? 'é' : 'não é'} bissexto`);
