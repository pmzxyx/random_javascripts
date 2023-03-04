window.snake.burger=function(settings={}){void 0===settings.walls&&(settings.walls=settings.dark?"#AAAAAA":"#578A34"),void 0===settings.border&&(settings.border=settings.dark?"#2E2933":settings.walls),void 0===settings.lightSquares&&(settings.lightSquares=settings.dark?"#47404F":"#AAD751"),void 0===settings.darkSquares&&(settings.darkSquares=settings.dark?"#423C49":"#A2D149"),eval(`
		var burgerImage = [];
		for(i = 0; i <= 13; i++)burgerImage[i] = new Image;
		burgerImage[0].src  = 'https://i.postimg.cc/sgDDBdYG/sprite-5.png';
		burgerImage[1].src  = 'https://i.postimg.cc/HsmLg7j2/sprite-4.png';
		burgerImage[2].src  = 'https://i.postimg.cc/jqPjmhq2/sprite-3.png';
		burgerImage[3].src  = 'https://i.postimg.cc/T1VYbTNg/sprite-2.png';
		burgerImage[4].src  = 'https://i.postimg.cc/yx48WDj7/sprite-1.png';
		burgerImage[5].src  = 'https://i.postimg.cc/zfyzjCPJ/sprite-8.png';
		burgerImage[6].src  = 'https://i.postimg.cc/hty4Tysy/sprite-9.png';
		burgerImage[7].src  = 'https://i.postimg.cc/RVTZVVHz/sprite-6.png';
		burgerImage[8].src  = 'https://i.postimg.cc/Pf4gCL2K/sprite-7.png';
		burgerImage[9].src  = 'https://i.postimg.cc/Gp6cS4Zv/sprite-10.png';
		burgerImage[10].src = 'https://i.postimg.cc/vB6mQrWP/sprite-0.png';
		burgerImage[11].src = 'https://i.postimg.cc/bJbzXzhW/sprite-11.png';
		burgerImage[12].src = 'https://i.postimg.cc/j2bRtGq5/sprite-12.png';
		burgerImage[13].src = 'https://i.postimg.cc/rsNMmQz9/sprite-13.png';
		var burgetti = new Image;
		burgetti.src = 'https://i.postimg.cc/rsNMmQz9/sprite-13.png';
		var burger = false, burgerm = false, burgert = false, burgerT = false;
		var counter = 0, counterb = 0, counters = 0;
	`);let scriptElements=document.getElementsByTagName("script"),url=scriptElements[scriptElements.length-1].src,req=new XMLHttpRequest;function processSnakeCode(code){let m=code.match(/ s_[a-zA-Z0-9]{1,4}=function\(a\){[^}]*?=2[^]*?&&[a-zA-Z0-9_]{1,6}\(a,a\.[a-zA-Z0-9]{1,6},!0\)}}}}/)[0],r0=/a\.[a-zA-Z0-9]{1,6}\[0\]\.equals\(d\.[a-zA-Z0-9]{1,6}\)\|\|f\|\|g/,i=m.match(r0)[0],r1=/a\.[a-zA-Z0-9]{1,8}\+\+;/,s=m.match(r1)[0];eval(m.replace("switch","if(burgerm&&burger)counters++;switch").replace(r0,i+"||burgert").replace(r1,`if(${s.replace("++;","")} === 0){counter = 0;counterb=1;burger = false;}
				${s.replace("++","+=burgerm&&burger?counters>=a.Aa.width*a.Aa.height*30?100:counters>=30?3:2:1")}
				counter++;
				if(burger){burger = false; counter = 0; counters=  0;counterb = 0;}
				if(counter >= 13)burger = true;`).replace(/if\(0===/,`if(${s.replace("++;","")}>=a.Aa.width*a.Aa.height-6||0===`).replace("WIN.play(),","WIN.play(),burger=false,counter=0,counters=0,counterb=0,").replace("}}}}","}}}}")),m=code.match(/s_[a-zA-Z0-9_]{1,8}\.prototype\.[a-zA-Z0-9_]{1,8}=function\(a\){if\(this\.[a-zA-Z0-9_]{1,8}&&!this\.[a-zA-Z0-9_]{1,8}\)[^]*?}}/)[0],r0=/[a-zA-Z0-9_]{1,8}\(this\.[a-zA-Z0-9_]{1,8}\[0<g\.type[^]*?:0\]\)/,i=m.match(r0)[0],eval(m.replace("#578A34",settings.border).replace(/#578A34/g,settings.walls).replace(r0,"burgerm ? burger ? burgetti : burgerImage[g.type > 0 && g.type < 13 ? g.type : 0] : "+i)),m=code.match(/[a-zA-Z0-9_]{1,6}=function\(a\){[^}]*return c}return[^]*?}/)[0],r0=/return a\.[a-zA-Z0-9]{1,4}/;let r=m.match(r0)[0];eval(m.replace("var b=new Set;","burgerm = true;var b=new Set;").replace("Math.floor(13*Math.random());","counterb++ % 13;").replace(r0,"burgerm = false;"+r)),eval((m=code.match(/[a-zA-Z0-9_]{1,6}=function\(a\){[a-zA-Z0-9_]{1,6}\.[a-zA-Z0-9_]{1,6}\.play\(\);[^}]*?}/)[0]).replace(".play();",".play();counter = 0;burger = false;counterb = 0;"));let imgs=document.body.getElementsByTagName("img");for(let img of imgs)img.src.includes("apple_13")&&(img.src="https://i.postimg.cc/rsNMmQz9/sprite-13.png")}req.open("GET",url),req.onload=function(){processSnakeCode(this.responseText)},req.send()};
