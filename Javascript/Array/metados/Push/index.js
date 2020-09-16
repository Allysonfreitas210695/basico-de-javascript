//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

const vetor = [];

let i = 0;

//esse laço de repetiçao vai roda 10 vezes, vai perguntar o usuario e add no vetor
while( i < 10){
    let takeInput = Number(prompt("digite o numero para add no vetor"));
    vetor.push(takeInput);
    i++;
}

//esse laço só imprimir o vetor;
for(const x of vetor){
    console.log(x);
}