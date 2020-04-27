function test(){
let agora=new Date
let res=window.document.querySelector("section.result")
//mostra resultado aqui em baixo
res.innerHTML=`<p><strong>o sistema vai passar isso </strong><mark>${agora}</mark></p>`
res.innerHTML+=`<p><strong>obrigado pela atenção</strong></p>`}