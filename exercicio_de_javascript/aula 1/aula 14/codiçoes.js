//while em portuques é {enquanto};
//tem que dizer de onde ela começa aqui;
let cont=0
let nome=window.document.querySelector("section#result")
//condiçao
while(cont<10){
    
    //aqui o laço atualizar
    cont++
}
nome.innerHTML=`<p> aqui esta o resultado ${cont}</p>`
//nesse ex. mostra o total de elementos que teve dentro do laço;
//também podemos fazer condições dentro do laço;
cont=0
let soma=0;
while(cont<10){
    //condicao
    if(cont%2==0){
       soma+=cont
    }
    //aqui o laço atualizar
    cont++
}
nome.innerHTML+=`<p> aqui esta o resultado da soma ${soma}</p>`