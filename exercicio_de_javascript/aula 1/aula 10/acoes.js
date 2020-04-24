/*varias globais nao para nao repeti dentro das funcoes*/
let nome=window.document.querySelector("section#result")

function acao1(){
nome.innerHTML+= '<p>Clicou no primeiro botão</p>'
}

function acao2(){
    nome.innerHTML='<p>Clicou no segundo botão</p>'
}

function acao3(){
    nome.innerHTML='<p>Clicou no terceiro botão</p>'
}

function acao4(){
    nome.innerHTML='<p>Clicou no quarto botão</p>'
}