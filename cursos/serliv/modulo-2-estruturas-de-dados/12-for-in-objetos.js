const endereco = {
  logradouro: 'Rua das Tulias',
  numero: 302,
};

const pessoa = {
  nome: 'Bruno',
  sobrenome: 'Galvão',
  endereco,
};

console.log(
  `${pessoa.nome} mora em ${pessoa.endereco.logradouro}, n.º ${endereco.numero}\n----------------------------`,
);

const formatKey = (key) => `${key.charAt(0).toUpperCase()}${key.slice(1)}`;

for (const pessoaKey in pessoa) {
  if (typeof pessoa[pessoaKey] === 'object') {
    for (const enderecoKey in pessoa[pessoaKey]) {
      console.log(`${formatKey(enderecoKey)}: ${pessoa[pessoaKey][enderecoKey]}`);
    }
  } else {
    console.log(`${formatKey(pessoaKey)}: ${pessoa[pessoaKey]}`);
  }
}
