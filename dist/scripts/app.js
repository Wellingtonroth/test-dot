function atualizaContador(){var e=new Date,t=new Date(YY,MM-1,DD,HH,MI,SS),n=parseInt((t-e)/1e3),a=parseInt(n/60),o=parseInt(a/60),d=parseInt(o/24);n-=60*a,a-=60*o,o-=24*d;var l,m,i,u,s="";l=d,s=d<=1?"DIA":"DIAS",m=String(o).padStart(2,"0"),i=String(a).padStart(2,"0"),u=String(n).padStart(2,"0"),d+o+a+n>0?(document.getElementById("de_dias").textContent=l,document.getElementById("lb_dias").textContent=s,document.getElementById("de_hors").textContent=m,document.getElementById("de_minu").textContent=i,document.getElementById("de_secs").textContent=u,setTimeout(atualizaContador,1e3)):setTimeout(atualizaContador,1e3)}var YY=2019,MM=11,DD=28,HH=23,MI=59,SS=59,modal=document.getElementById("myModal"),btn=document.getElementById("myBtn"),span=document.getElementsByClassName("teaser-modal-close")[0];document.getElementById("form-bf").addEventListener("submit",function(e){var t=[{name:"name",value:document.getElementById("input-nome").value},{name:"email",value:document.getElementById("input-email").value},{name:"fone",value:document.getElementById("input-telefone").value},{name:"identificador",value:"inscricao-black-friday-2019"},{name:"token_rdstation",value:"1fabfb1b8a6b5ebeb8994294173004eb"}];RdIntegration.post(t),e.preventDefault(),document.getElementById("msg-success").style.display="block",document.getElementById("form-bf").style.display="none"}),atualizaContador(),btn.onclick=function(){"ga"in window&&(tracker=ga.getAll()[0],tracker&&tracker.send("event","Teaser","Clique","Quero o superdesconto")),modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")},document.onkeydown=function(e){e=e||window.event,27==e.keyCode&&(modal.style.display="none")};