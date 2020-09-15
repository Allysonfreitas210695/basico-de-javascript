/**
 * O método map() invoca a função callback passada por argumento para cada elemento do Array e
 *  devolve um novo Array como resultado.
 */

const array = [1,2,3,4,5,5,6,7,8,9,0];

const take = array.map(function(value){
    return value;
})

console.log(take);