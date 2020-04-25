//hj vamos fazer o laço de repeticao for que em significar {para}
//muitas linguagens tem que ter a condição inicial antes do laço 
//let n1=0 é opcional, mas tbm pode ser dentro do laço
let cont=0//contador
let res=window.document.getElementById("result")
//condição
for(let n1=0;n1<7;n1++){
    cont++
    res.innerHTML=`<p>o resultado é <mark>${cont}</mark></p>`
}
//outra condicao, no caso vai mostra  outra resposta.
if(cont>0 && cont%2==0){
    res.innerHTML+=`<p>Sim ele é positivo e Par</p>`
}
else {
    res.innerHTML+=`<p>Sim ele é positivo mas é Impar</p>`
}
//pode usa condicionais tbm dentro, aqui usei fora só opçao mesmo..

