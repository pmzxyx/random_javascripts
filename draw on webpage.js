javascript:%20var%20opt=1;alert("keyboard%20commands:c=color%20picker.%20u=pen%20up.%20d=pen%20down.%20s=size.%20o=opacity.%20reload%20to%20clear.");%20var%20pen='none';%20var%20size=10;%20function%20repeat(event)%7B(function()%7B%20%20%20var%20color=document.createElement('div');%20%20%20var%20body=document.getElementsByTagName('body')[0];%20%20%20body.appendChild(color);%20%20%20color.style.position='fixed';%20%20%20color.style.bottom='0px';%20%20%20color.style.right='0px';%20%20%20color.style.margin='0px';%20%20%20color.style.paddingTop='0px';%20%20%20color.style.width='1366px';%20%20%20color.style.height='20px';%20%20%20color.style.zIndex=10000;%20%20%20color.style.opacity=0.8;%20%20%20color.style.color='white';%20%20%20color.style.backgroundColor='black';%20%20%20color.style.border='0px%20solid%20black';%20%20%20color.style.textAlign='center';%20%20%20color.style.cursor='pointer';%20%20%20color.id='color';%20%20%20color.style.display='circle';%20%20%20color.innerText='by%20dragonmaster73101';%20%20%20document.getElementById('me').addEventListener('click',function()%7Bwindow.open('https://github.com/dragon731012');%7D);%7D());%7D%20function%20mousemove(event)%7B%20%20%20var%20x=event.clientX;%20%20%20var%20y=event.clientY;%20%20%20x=x-9-size;y=y-12-size;%20%20%20(function()%7B%20%20%20%20%20var%20elem=document.createElement('div');%20%20%20%20%20var%20body=document.getElementsByTagName('body')[0];%20%20%20%20%20body.appendChild(elem);%20%20%20%20%20elem.style.position='fixed';%20%20%20%20%20elem.style.top=''+y+'px';%20%20%20%20%20elem.style.left=''+x+'px';%20%20%20%20%20elem.style.margin='10px';%20%20%20%20%20elem.style.paddingTop='10px';%20%20%20%20%20elem.style.width=''+size+'px';%20%20%20%20%20elem.style.height=''+size+'px';%20%20%20%20%20elem.style.zIndex=10000;%20%20%20%20%20elem.style.opacity=opt;%20%20%20%20%20elem.style.color=''+clr+'';%20%20%20%20%20elem.style.backgroundColor=''+clr+'';%20%20%20%20%20elem.style.border='0px%20solid%20white';%20%20%20%20%20elem.style.textAlign='center';%20%20%20%20%20elem.id='paint';%20%20%20%20%20elem.style.display=''+pen+'';%20%20%20%20%20elem.innerText='';%7D());%7D%20window.addEventListener("keydown",function(event)%7B%20%20%20if%20(event.key=="c")%7B%20%20%20%20%20clr=prompt("what%20color%20do%20you%20want?%20must%20be%20very%20broad,%20and%20with%20no%20caps%20or%20special%20characters.%20ex:blue");%20%20%20%20%20elem.style.display=%27block%27;%7D%7D);%20window.addEventListener("keydown",function(event)%7B%20%20%20if%20(event.key=="s")%7B%20%20%20%20%20size=prompt("what%20size%20do%20you%20want?%20no%20caps,%20letters,%20or%20special%20characters.%20ex:%2010");%20%20%20%20%20elem.style.display=%27block%27;%7D%7D);%20window.addEventListener("keydown",function(event)%7B%20%20%20if(event.key=="u")%7B%20%20%20%20%20pen=%27none%27;%7D%7D);%20window.addEventListener("keydown",function(event)%7B%20%20%20if(event.key=="d")%7B%20%20%20%20%20pen=%27circle%27;%7D%7D);%20window.addEventListener("keydown",function(event)%7B%20%20%20if(event.key=="o")%7B%20%20%20%20%20opt=prompt("what%20do%20you%20want%20the%20opacity%20to%20be?%201%20to%200.%201=none.%200=a%20lot.");%7D%7D);%20window.addEventListener(%27mousemove%27,mousemove);%20repeat();
