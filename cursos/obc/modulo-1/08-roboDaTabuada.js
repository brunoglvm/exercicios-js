let numero = Number(prompt('Insira um número!'));
let resultado = '';

for (let i = 1; i <= 20; i++) {
  resultado += `${numero} x ${i} = ${numero * i}\n`;
}
console.log(`Resultado da tabuada de: ${numero} \n${resultado}`);
