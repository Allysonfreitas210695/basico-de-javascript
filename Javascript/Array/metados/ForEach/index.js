/**
 * O método forEach() executa uma dada função em cada elemento de um array.
 */

const vetor = [1,2,3,4,6,7,8,9,10];

vetor.forEach(function(value){
    console.log(value);
})

//pegar o indice tbm pode aqui no ForEach
vetor.forEach(function(value, index){
    console.log("indice =",index," valor =",value);
})
