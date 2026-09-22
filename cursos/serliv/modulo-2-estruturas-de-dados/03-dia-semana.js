const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const data = new Date();
const dia = data.getDay();

console.log(`Hoje é: ${dias[dia]}${dia !== 0 && dia !== 6 ? '-feira' : ''}`);
