javascript:(function(){function c(){return'#'+Math.floor(16777215*Math.random()).toString(16)}function%20r(e){return%20Math.floor(Math.random()*e)+1}function%20l(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}var%20d=document;d.head.innerHTML='%3Cstyle%3E*{margin:0;%20overflow:hidden;%20padding:0;overflow:hidden;}%20div{%20%20transform-origin:%2050%%2050%;%20width:100%;%20height:1px;%20position:relative;%20z-index:1;}%20%3C/style%3E',d.body.innerHTML='';var%20w=window.screen.availHeight;for(d.body.addEventListener('click',function(){l(d.documentElement)}),i=0;w%3E=i;i++){var%20z=d.createElement('div');z.id='b'+i,z.style.backgroundColor=c(),d.body.appendChild(z)}setInterval(function(){for(var%20e=0;10%3Ee;e++)d.getElementById('b'+r(w)).style.backgroundColor=c(),d.getElementById('b'+r(w)).style.height=r(4)+'px',d.body.style.backgroundColor=c(),d.body.style.transform=r(256)%3E128?'scale(3)%20rotate('+r(35)+'deg)':'rotate(0deg)%20scale(1)';window.scrollTo(0,document.body.scrollHeight)},10),setInterval(function(){window.scrollTo(0,0)},50);})()
