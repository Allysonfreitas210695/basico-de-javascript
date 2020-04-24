function mediatotal(){
    let nome=window.prompt("Qual seu nome aluno?");
    /*
    porque eu tenho que colocar o Number onde está perguntando lá no site, 
    porque no javascript vem como caractere, por isso tem que colocar o tipo que quero trabalhar.
     */
    let n1=Number(window.prompt(`qual sua primeira nota ${nome}?`))
    let n2=Number(window.prompt(`Qual foi a segunda nota ${nome}`))
    /*fazer a media aqui! */
    let media=(n1+n2)/2;
    let msg // cria uma variável e deixa ela vazia
    if (media>6){ // Se por acaso a média foi 6.0 ou mais...
        msg=`parabens vc foi aprovado!`
    }
    else { //senao...
        msg=`estude um pouco mais que ta certo da proxima`
    }
    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos ou outro, dependendo do resultado de um teste lógico.
    let res=window.document.getElementById("result")
    res.innerHTML=`<p> calculando a nota final de <mark>${nome}</mark></p>`
    res.innerHTML+=`<p> os numeros obtidos foram <strong>${n1}</strong> e <strong>${n2}</strong></p>`
    res.innerHTML+=`<p> a nota final obtido pelo aluno <b>${nome}</b> foi <b>media ${media}</b></p>`
    res.innerHTML+=`<p> A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
    // Note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha ;)


}