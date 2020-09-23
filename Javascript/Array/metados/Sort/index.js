/*
O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável.
A ordenação padrão é de acordo com a  pontuação de código unicode.
*/

const vetor = [100,29,39,4,59,69,78,99,1000];

const Take = vetor.sort((a, b) => a - b);

console.log(Take);

