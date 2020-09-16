//O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const array1 = [1, 2, 3, 4];

const somaElement = array1.reduce((value, next) => value + next , 0);

console.log(somaElement);