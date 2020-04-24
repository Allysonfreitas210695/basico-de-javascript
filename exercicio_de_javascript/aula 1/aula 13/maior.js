function teste(){
let n1=Number(window.prompt("digite o primeiro numero:"))
let n2=Number(window.prompt("digite o segundo numero:"))

let res=window.document.querySelector("section.result")
//condição
if (n1>n2){
    res.innerHTML=`<p>o numero <mark>${n1}</mark> é maior</p>`
}
else if(n2>n1){
    res.innerHTML=`<p>o numero <mark>${n2}</mark> é maior</p>`
}
else{
    res.innerHTML=`<p>o numero são <mark>IGUAIS</mark></p>`
}

}