//O DO While significa {faz até a condiçao seja verdadeira};
//como no while deve ter o inicio da condiçao;
let cont=1
let nome=window.document.querySelector("section#result")
//condiçao
do{
    nome.innerHTML=`<p>aqui mostra as vezes que o laço foi verdadeiro,no caso conta <mark>${cont}</mark></p>`
    cont++
}while(cont<10);