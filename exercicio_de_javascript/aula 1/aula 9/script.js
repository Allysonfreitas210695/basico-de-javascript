let contador = 0 
let res = document.querySelector('section#result')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

function contar(){
    contador++  // É a mesma coisa que contador = contador + 1
    res.innerHTML=`<p> o contador está com <strong>${contador}</strong>cliques</p>`
}
function zerar(){
    contador=0
    innerHTML=null;
}