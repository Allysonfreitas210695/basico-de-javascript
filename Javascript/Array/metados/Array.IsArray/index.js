//O método Array.isArray() retorna true se um objeto é uma array, e false se não é.
const array = [1,3,4,5,6];

//pegar o valor dela em uma variavel
const Take = Array.isArray(array);

console.log(Take);



//caso de como vai ser falso a verificação se é uma array
const numTest = 10;

const Test = Array.isArray(numTest);

console.log(Test)