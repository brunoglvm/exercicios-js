const c1 = {
  marca: 'Fiat',
  modelo: 'Uno',
  ano: 2023,
  km: 10000,
  combustivel: 'gasolina',
  litrosConsumidos: 625,
};

console.log(
  `O carro ${c1.marca} ${c1.modelo} ${c1.ano} fez em média ${c1.km / c1.litrosConsumidos} km/L de ${c1.combustivel}`,
);
