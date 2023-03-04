//basic
javascript:var num=prompt("Blur Amount:"); done = false; function blurpage(number) {document.body.style.filter = 'blur('+number+'px)';};for (var i=1; i<=num; i++) {setInterval(blurpage, 50,i); if(i==num){done=true}}

//more crazy
javascript:var num=prompt("Blur Amount:"); done = false; function blurpage(number) {document.body.style.filter = 'blur('+number+'px)';};for (var i=1; i<=num; i++) {setInterval(blurpage,150,i); if(i==num){done=true}}

