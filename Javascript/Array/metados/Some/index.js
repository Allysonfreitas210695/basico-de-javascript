/*
O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e 
retorna um valor true ou false.
 */

const test = [1,3,5,7,9,11];

//testa se sao pares os numeros nesse caso aqui a resposta e FALSE
const Result = test.some(value => value % 2 == 0).valueOf();

console.log(Result);