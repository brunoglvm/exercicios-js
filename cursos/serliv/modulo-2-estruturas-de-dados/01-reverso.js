let nomes = ['joão', 'maria', 'daniel', 'beatriz', 'ricardo', 'luciene'];

for (let i = nomes.length - 1; i >= 0; i--) {
  const ordem = nomes.length - i;
  const nome = nomes[i].charAt(0).toUpperCase() + nomes[i].slice(1);

  console.log(ordem, nome);
}
