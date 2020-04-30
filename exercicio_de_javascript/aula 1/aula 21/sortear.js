//variaveis globais aqui
let saida=window.document.getElementById('result')
let computador=0
let jogador=0

function sortear(){
    let min=1 // As variáveis declaradas aqui dentro são LOCAIS, e só funcionam dentro da função onde foram declaradas
    let max=100
    let dif=max-min
    let aleatorio=Math.random()
    computador=min+Math.trunc(dif*aleatorio)
    saida.innerHTML=`<p>numero do computador é ${computador}</p>`
}
function jogar (){
    let jogador=Number(window.prompt('digite o numero que vc esta pensando agora'))
    //condicoes 
    if(jogador<computador){
        saida.innerHTML+=`<p>você falou ${jogador}, mas o numero do computador é  <mark>maior</mark>  </p>`
    }
    else if(jogador>computador){
        saida.innerHTML+=`<p>você falou ${jogador}, mas o numero do computador é  <mark>menor</mark> </p>`
    }
    else if (jogador==computador){
        saida.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }

}