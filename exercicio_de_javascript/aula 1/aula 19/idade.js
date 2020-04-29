function calculo(){
//aqui vai pegar a ano,mes e dia
let agora= new Date
let ano= agora.getFullYear()//aqui vai pegar o ano que estamos
//receber o nome e a idade 
let nome=prompt('digite seu nome por favor')
let idadeatual=Number(window.prompt("digite sua idade aqui:"))//ler a idade
//operaçao
let anoquenasceu=ano-idadeatual
//mostra o resultado aqui
let saida=window.document.getElementById('result')
saida.innerHTML=`<p><b>${nome}</b> nasceu no ano de  <mark>${anoquenasceu}</mark></p>`

}