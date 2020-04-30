function calc(){

    let n1=Number(window.prompt('digite o primeiro numero'))
    let n2=Number(window.prompt('digite o primeiro numero'))
    let opcao=Number(window.prompt('digite a opcao aqui'))

   //condicional switch case 
   let saida=document.getElementById('saida')
    saida.innerHTML=`<h2>calculando.....</h2>`

    //condicao
    switch (opcao){
        case 1:
            //soma
            saida.innerHTML+=`<p>${n1}+${n2}=<mark>${n1+n2}</mark> </p>`
            break
        case 2:
            //subtraçao
            saida.innerHTML+=`<p>${n1}-${n2}=<mark>${n1-n2}</mark> </p>`
            break
        case 3:
            //multiplicação
            saida.innerHTML+=`<p>${n1}*${n2}=<mark>${n1*n2}</mark> </p>`
            break
        case 4:
            //divisão
            saida.innerHTML+=`<p>${n1}/${n2}=<mark>${n1/n2}</mark> </p>`
            break
            default:
                saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`
                break
    }
}