function contar(){
    let cont=10
    let saida=document.getElementById('saida')
    //condicao
    while(cont>=1){
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont--
    }
    saida.innerHTML += ` &#x1F3C1;`
}