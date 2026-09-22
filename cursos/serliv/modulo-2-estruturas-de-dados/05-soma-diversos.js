const valoresDiversos = [32, 'bruno', 49, true, false, 'glvm', 81, 50, [], {}];

let soma = 0;
let expressao = '';

for (let i = 0; i < valoresDiversos.length; i++) {
  if (typeof valoresDiversos[i] === 'number') {
    soma += valoresDiversos[i];
    expressao += `${valoresDiversos[i]} + `;
  }
}

console.log(`${expressao.slice(0, -3)} = ${soma}`);
