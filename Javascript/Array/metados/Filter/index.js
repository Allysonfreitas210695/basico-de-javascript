//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const vetor = [1,2,3,4,5,6,7,8,9,10];

vetor.filter((value, index) => value % 2 == 0 ? console.log("indice =",index," valor =",value) : null);

//exemplo usado filter com outro metado, desse exemplo retorna 30 como resulta
vetor.filter(value => value % 2 == 0).reduce((a, b) => a + b, 0);