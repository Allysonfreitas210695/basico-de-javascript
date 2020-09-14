//O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente

const vetor = [1,2,3,4,5,6,7,8,9,10];

const numero = 10;

if(vetor.indexOf(numero) != -1){
    console.log("indice do Array =",vetor.indexOf(numero), "numero para busca do indice =",numero);
}else{
    console.log(vetor.indexOf(numero));
}