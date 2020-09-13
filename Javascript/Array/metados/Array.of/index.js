//criar um array Array.of
const novoArray = Array.of(1,2,3,4,5);

console.log(novoArray);

//tambem pode ser usado assim Array.of
const novoArray2 = Array(1,2,3,4,5)

console.log(novoArray2);

//mas tambem termos que observa algumas coisa referente ao constructor Array 
const novoArray3 = Array(7);

//vai imprimir 7 espaços vazios aqui
console.log(novoArray3);