/*
O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
 */

const vetor = [1,2,3,4,5,6,7,8,9,10];
//qual posiçao começa no vetor;
const start = 0;

//ate onde vai, lembrando que é menos -1 aqui
const last = 3;

//aqui tem que pegar do 0 a 3;
const Take = vetor.splice(start,last);

console.log(Take);