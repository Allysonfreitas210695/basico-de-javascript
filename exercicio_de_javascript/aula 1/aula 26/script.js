let saida=document.getElementById('saida')

function tabuada(){
    let numero=Number(document.getElementById('fnum').value)
    saida.innerHTML=`<h2>tabuada de ${numero}</h2>`
    let c=1
    //condicao aqui;
    while(c<=10){
        saida.innerHTML+= `${numero} x ${c} = <mark>${numero * c}</mark><br>`
        c++
    }
}