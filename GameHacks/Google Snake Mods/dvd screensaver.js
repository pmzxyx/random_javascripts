javascript: window.snake.dvd = function(settings = {}) {   if(settings.walls === undefined)     settings.walls = settings.dark ?%20%27#101010'%20:%20'#578A34';%20%20%20if(settings.borders%20===%20undefined)%20%20%20%20%20settings.borders%20=%20settings.dark%20?%20'#2E2933'%20:%20'#578A34';%20%20%20if(settings.lightSquares%20===%20undefined)%20%20%20%20%20settings.lightSquares%20=%20settings.dark%20?%20'#47404F'%20:%20'#AAD751';%20%20%20if(settings.darkSquares%20===%20undefined)%20%20%20%20%20settings.darkSquares%20=%20settings.dark%20?%20'#423C49'%20:%20'#A2D149';%20%20%20%20%20%20const%20scripts%20=%20document.getElementsByTagName('script');%20%20%20for(let%20script%20of%20scripts)%20{%20%20%20%20%20const%20req%20=%20new%20XMLHttpRequest();%20%20%20%20%20req.open('GET',%20script.src);%20%20%20%20%20req.onload%20=%20function()%20{%20%20%20%20%20%20%20const%20c%20=%20this.responseText;%20%20%20%20%20%20%20if(c.indexOf('#A2')%20===%20-1)%20%20%20%20%20%20%20%20%20return%20'you\'re%20a%20failure';%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log('hi');%20%20%20%20%20%20%20eval('var%20type%20=%200;');%20%20%20%20%20%20%20eval(%60%20%20%20%20%20%20%20%20%20logos%20=%20[];%20%20%20%20%20%20%20%20%20let%20i;%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/D01kHgNB/dvd-00.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/T2b6KdPg/dvd-01.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/pXYMBszd/dvd-02.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/Qd8GYcJJ/dvd-03.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/XYsMRX2S/dvd-04.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/dtKKdb7X/dvd-05.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/Pq7gq9sS/dvd-06.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/TPh8fGSy/dvd-07.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/XJyTBLn4/dvd-08.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/d3Pg2C0d/dvd-09.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/ryxB8fh9/dvd-10.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/VvqpDNSh/dvd-11.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20i%20=%20new%20Image;%20%20%20%20%20%20%20%20%20i.src%20=%20'https://i.postimg.cc/PrHBN19n/dvd-12.png';%20%20%20%20%20%20%20%20%20logos.push(i);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20eval(%20%20%20%20%20%20%20%20%20c.match(%20%20%20%20%20%20%20%20%20%20%20/[a-zA-Z0-9_$]{1,6}=function\(a,b\){var%20c={};0%3E=b\.[a-zA-Z0-9_$]{1,6}\.x\?c\.left=!0:[^]*?=0\)}}/%20%20%20%20%20%20%20%20%20)[0].replace(%20%20%20%20%20%20%20%20%20%20%20'?c.left=!0:',%20%20%20%20%20%20%20%20%20%20%20'?(c.left=!0,type%20=%20(1%20+%20type)%20%%2013):'%20%20%20%20%20%20%20%20%20).replace(%20%20%20%20%20%20%20%20%20%20%20'(c.right=!0)',%20%20%20%20%20%20%20%20%20%20%20'(c.right=!0,type%20=%20(1%20+%20type)%20%%2013)'%20%20%20%20%20%20%20%20%20).replace(%20%20%20%20%20%20%20%20%20%20%20'?c.top=!0:',%20%20%20%20%20%20%20%20%20%20%20'?(c.top=!0,type%20=%20(1%20+%20type)%20%%2013):'%20%20%20%20%20%20%20%20%20).replace(%20%20%20%20%20%20%20%20%20%20%20'(c.bottom=!0)',%20%20%20%20%20%20%20%20%20%20%20'(c.bottom=!0,type%20=%20(1%20+%20type)%20%%2013)'%20%20%20%20%20%20%20%20%20)%20%20%20%20%20%20%20);%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20coolCatClasspbalsfkjsd%20=%20c.match(%20%20%20%20%20%20%20%20%20/[a-zA-Z0-9_$]{1,6}\.prototype\.[a-zA-Z0-9_$]{1,6}=function\(\){if\(!this\.[a-zA-Z0-9_$]{1,6}&&!this\.[a-zA-Z0-9_$]{1,6}\)return%20[a-zA-Z0-9_$]{1,6}\(\);this\.[a-zA-Z0-9_$]{1,6}=this\.[a-zA-Z0-9_$]{1,6}[^]*?}}\);[^]?return%20[a-zA-Z0-9_$]{1,6}\(this\)}/%20%20%20%20%20%20%20)[0];%20%20%20%20%20%20%20const%20line%20=%20coolCatClasspbalsfkjsd.match(%20%20%20%20%20%20%20%20%20/this\.[a-zA-Z0-9_$]{1,6}=this\.[a-zA-Z0-9_$]{1,6};/g%20%20%20%20%20%20%20)[1];%20%20%20%20%20%20%20const%20Fe%20=%20line.match(/this\.[a-zA-Z0-9_$]{1,6}/)[0];%20%20%20%20%20%20%20eval(%20%20%20%20%20%20%20%20%20coolCatClasspbalsfkjsd.replace(%20%20%20%20%20%20%20%20%20%20%20line,%20%20%20%20%20%20%20%20%20%20%20%20line%20+%20%60type%20=%20${Fe}%20===%2013%20?%20~~(Math.random()%20*%2013)%20:%20this.Fe;%60%20%20%20%20%20%20%20%20%20)%20%20%20%20%20%20%20);%20%20%20%20%20%20%20%20eval(%60var%20boxImage%20=%20new%20Image;%20boxImage.src%20=%20'https://i.postimg.cc/GppCGFKQ/box.png';%60);%20%20%20%20%20%20%20setTimeout(function()%20{%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20const%20box%20=%20c.match(%20%20%20%20%20%20%20%20%20%20%20/this\.[a-zA-Z0-9_$]{1,6}=new%20[a-zA-Z0-9_$]{1,6}\([^)}]*?box\.png[^})]*?\);/%20%20%20%20%20%20%20%20%20)[0].replace('this.',%20'').replace(/=new[^]*/g,%20'');%20%20%20%20%20%20%20%20%20%20const%20containee%20=%20c.match(%20%20%20%20%20%20%20%20%20%20%20/[a-zA-Z0-9_$]{1,6}=function\(a,b,c\){this\.[a-zA-Z0-9_$]{1,6}=new%20Image;[^}]*?this\)}/%20%20%20%20%20%20%20%20%20)[0].match(/this\.[a-zA-Z0-9_$]{1,6}=document/)[0].replace('this.',%20'').replace('=document',%20'');%20%20%20%20%20%20%20%20%20%20eval(%20%20%20%20%20%20%20%20%20%20%20%60%20%20%20%20%20%20%20%20%20%20%20var%20boxCanvas%20=%20document.createElement('canvas');%20%20%20%20%20%20%20%20%20%20%20boxCanvas.width%20=%20896;boxCanvas.height%20=%20128;%20%20%20%20%20%20%20%20%20%20%20var%20bctx%20=%20boxCanvas.getContext('2d');%20%20%20%20%20%20%20%20%20%20%20%20bctx.drawImage(boxImage,%200,%200);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.lightGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(128,%200,%20128,%20128);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.darkGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(149,%2021,%2085,%2085);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.lightGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(171,%2043,%2041,%2041);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.darkGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(256,%200,%20128,%20128);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.lightGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(277,%2021,%2085,%2085);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.darkGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(299,%2043,%2041,%2041);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.lightGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(384,%200,%20128,%20128);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.darkGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(405,%2021,%2085,%2085);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.lightGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(427,%2043,%2041,%2041);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.darkGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(512,%200,%20128,%20128);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.lightGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(533,%2021,%2085,%2085);%20%20%20%20%20%20%20%20%20%20%20%20bctx.fillStyle%20=%20'${settings.darkGoal}';%20%20%20%20%20%20%20%20%20%20%20bctx.fillRect(555,%2043,%2041,%2041);%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%20%20%20%20%20%20%20%20%20);%20%20%20%20%20%20%20%20%20%20const%20ffjdkasemicolonLOL%20=%20c.match(%20%20%20%20%20%20%20%20%20%20%20/[a-zA-Z0-9_$]{1,6}\.prototype\.[a-zA-Z0-9_$]{1,6}=function\(a\){if\(this\.[a-zA-Z0-9_$]{1,6}&&!this\.[a-zA-Z0-9_$]{1,6}\){if\(0%3C[^]*?#578A34[^]*?}}}/%20%20%20%20%20%20%20%20%20%20%20)[0];%20%20%20%20%20%20%20%20%20const%20thatoneline%20=%20ffjdkasemicolonLOL.match(%20%20%20%20%20%20%20%20%20%20%20/this\.[a-zA-Z0-9_$]{1,6}\.drawImage\([a-zA-Z0-9_$]{1,6}\(this\.[a-zA-Z0-9_$]{1,6}\[0%3Cp\.type[^\]})]*?0\]\),0,0,128,128[^)]*?v,v\)/%20%20%20%20%20%20%20%20%20)[0];%20%20%20%20%20%20%20%20%20%20eval(%20%20%20%20%20%20%20%20%20%20%20ffjdkasemicolonLOL.replace(%20%20%20%20%20%20%20%20%20%20%20%20%20'{',%20%20%20%20%20%20%20%20%20%20%20%20%20%60{%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this\.${box}\.${containee}%20=%20{%20canvas:%20boxCanvas,%20};%20%20%20%20%20%20%20%20%20%20%20%20%20%60%20%20%20%20%20%20%20%20%20%20%20).replace(%20%20%20%20%20%20%20%20%20%20%20%20%20'#578A34',%20%20%20%20%20%20%20%20%20%20%20%20%20settings.borders%20%20%20%20%20%20%20%20%20%20%20).replaceAll(%20%20%20%20%20%20%20%20%20%20%20%20%20'#578A34',%20%20%20%20%20%20%20%20%20%20%20%20%20settings.walls%20%20%20%20%20%20%20%20%20%20%20).replaceAll(%20%20%20%20%20%20%20%20%20%20%20%20%20'#A2D149',%20%20%20%20%20%20%20%20%20%20%20%20%20settings.lightSquares%20%20%20%20%20%20%20%20%20%20%20).replaceAll(%20%20%20%20%20%20%20%20%20%20%20%20%20'#AAD751',%20%20%20%20%20%20%20%20%20%20%20%20%20settings.darkSquares%20%20%20%20%20%20%20%20%20%20%20).replace(%20%20%20%20%20%20%20%20%20%20%20%20%20thatoneline,%20%20%20%20%20%20%20%20%20%20%20%20%20'p.type%20=%20type;'%20+%20(settings.logo%20?%20thatoneline.replace(%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/drawImage\([^,]*?,/,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'drawImage(logos[p.type],'%20%20%20%20%20%20%20%20%20%20%20%20%20)%20:%20thatoneline)%20%20%20%20%20%20%20%20%20%20%20)%20%20%20%20%20%20%20%20%20);%20%20%20%20%20%20%20},%20500);%20%20%20%20%20%20};%20%20%20%20%20req.send();%20%20%20}%20};%20%20%20window.snake.dvd({%20logo:%20true,%20});