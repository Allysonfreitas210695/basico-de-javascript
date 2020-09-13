/*
O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida.
 Caso contrario, undefined é retornado.
*/
const vetor = [1,2,3,4,5,6,7,8,9,10];

const result = vetor.find(value => value == 5)

console.log("o resultado é =", result)