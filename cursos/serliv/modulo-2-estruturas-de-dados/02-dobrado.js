const arr = [3, 12, 93, 45, 56, 12, 57, 14, 63];
const dobrados = [];

for (let i = 0; i < arr.length; i++) {
  const dobrado = arr[i] * 2;

  dobrados.push(dobrado);

  console.log(`${arr[i]} * 2 = ${dobrado}`);
}

console.log(dobrados);
