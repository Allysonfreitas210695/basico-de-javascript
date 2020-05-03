function estaçao(){
    let mes=window.prompt('digite um mes (ex: março)')
    let saida=window.document.getElementById('saida')
    let estacoes
    //codicao
    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacoes='INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacoes='PRIMAVERA'
            break;
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacoes='VERAO'
            break;
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacoes='OUTONO'
        default:
            estacoes='INDEFINIDO'
            break;
    }
    saida.innerHTML=`<p>você digitou o mês <mark>${mes}</mark> e a estação correspondente é <strong>${estacoes}</strong></p>`
}
//ESSE  EXEMPLO AE DE CIMA FOI ESCRITO POR EXTENSO MAS POR NUMERO TBM DARIA CERTO.