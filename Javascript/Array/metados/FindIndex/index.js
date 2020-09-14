/**
 * O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida.
 *  Caso contrário, retorna -1, 
 * indicando que nenhum elemento passou no teste
 */

const vetor = [1,2,3,4,5,6,7];

var numero = 4;

const Result = vetor.findIndex(value => value == numero);

console.log(Result);

