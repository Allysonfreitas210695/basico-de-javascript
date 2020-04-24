function teste(){
let numero=Number(window.prompt("digite o numero para ser testado aqui"))
/*
uma dica que dou é saber usar o simbolo de porcetagem que na programação significa resto.
*/
let msg
if (numero%2==0){
    msg=`é Par o numero verificado aqui`
}
else{
    msg=`é impar o numero`
}

let nome=window.document.querySelector("section.result")
//mostra resultado aqui em baixo
nome.innerHTML=`<p> o numero ${msg}</p>`

}