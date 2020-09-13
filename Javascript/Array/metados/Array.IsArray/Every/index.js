/*

O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
E retorna True ou False

*/

const vetor = [1,2,3,4,5,6,6,7,8];
//numero maiores que 0, resultado true
const take  = vetor.every(res => res > 0);

console.log(take);

//aqui verificar se são menores que 0, nesse caso aqui é falso
const take2 = vetor.every(function(res){
    return res < 0
})

console.log(take2);