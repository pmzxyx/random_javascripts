var x=window.innerWidth,width=x,y=window.innerHeight,height=y;x=x/2-25,y-=100;var up=0,down=0,left=0,right=0,playerspeed=6,enemyx=0,enemyy=-50,bulletchangey=1,bulletshoot=1,enemyy=-50,enemyx=-50,count=0,enemyspeed=6;function move(){1==up&&(y-=playerspeed,you.style.top=""+y+"px",you.style.left=""+x+"px"),1==down&&(y+=playerspeed,you.style.top=""+y+"px",you.style.left=""+x+"px"),1==left&&(x-=playerspeed,you.style.top=""+y+"px",you.style.left=""+x+"px"),1==right&&(x+=playerspeed,you.style.top=""+y+"px",you.style.left=""+x+"px")}function makeenemy(){!function(){var e=document.createElement("div");function t(){enemyy+=enemyspeed,e.style.top=""+enemyy+"px",enemyy>=height&&(clearInterval(t),enemyspeed/=2,(enem=document.getElementById("enemy"+count)).parentNode.removeChild(enem),enemyy=-50)}document.getElementsByTagName("body")[0].appendChild(e),enemyx=Math.floor(Math.random()*(width-0+1)+0),e.style.position="fixed",e.style.top=""+enemyy+"px",e.style.left=""+enemyx+"px",e.style.paddingTop="10px",e.style.width="50px",e.style.height="50px",e.style.zIndex=1e4,e.style.opacity=1,e.style.color="blue",e.style.backgroundColor="blue",e.style.border="0px solid white",e.style.textAlign="center",count+=1,e.id="enemy"+count,e.style.display="block",e.innerText="",setInterval(t,15)}()}!function(){var e=document.createElement("div");document.getElementsByTagName("body")[0].appendChild(e),e.style.position="fixed",e.style.top=""+y+"px",e.style.left=""+x+"px",e.style.paddingTop="10px",e.style.width="50px",e.style.height="50px",e.style.zIndex=1e4,e.style.opacity=1,e.style.color="white",e.style.backgroundColor="black",e.style.border="0px solid white",e.style.textAlign="center",e.id="you",e.style.display="block",e.innerText=""}(),window.addEventListener("keydown",function(e){"ArrowUp"==e.key&&(up=1),"ArrowDown"==e.key&&(down=1),"ArrowLeft"==e.key&&(left=1),"ArrowRight"==e.key&&(right=1)}),window.addEventListener("keyup",function(e){"ArrowUp"==e.key&&(up=0),"ArrowDown"==e.key&&(down=0),"ArrowLeft"==e.key&&(left=0),"ArrowRight"==e.key&&(right=0)}),setInterval(move,15),window.addEventListener("keyup",function(e){if("s"==e.key&&1==bulletshoot){var t,l,n;t=document.createElement("div"),document.getElementsByTagName("body")[0].appendChild(t),t.style.position="fixed",l=y-10,t.style.top=""+l+"px",n=x+25-7,t.style.left=""+n+"px",t.style.paddingTop="10px",t.style.width="7px",t.style.height="10px",t.style.zIndex=1e4,t.style.opacity=1,t.style.color="red",t.style.backgroundColor="red",t.style.border="0px solid white",t.style.textAlign="center",t.id="bullet",t.style.display="block",t.innerText="",setInterval(function e(){l-=6,t.style.top=""+l+"px",l<=0&&(bulletshoot=1)},15),bulletshoot=0}}),setInterval(makeenemy,2e3);

//s to shoot, arrow keys to move.