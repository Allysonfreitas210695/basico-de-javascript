/*
O método slice() retorna uma cópia de parte de um array a partir de um subarray 
criado entre as posições início e fim (fim não é necessário) de um array original.
O Array original não é modificado.
*/

const vetor = [1,2,3,4,5,6,7,8,9];

//final é menos -1;
const takeParte = vetor.slice(0,2)

console.log(takeParte);

