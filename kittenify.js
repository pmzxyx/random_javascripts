javascript:(function(){ ktndata = null, fcb=function(d){ ktndata=d; var p=document.getElementsByTagName('img'); for(var i in p){ p[i].width=p[i].width; p[i].height=p[i].height; p[i].src=d.items[Math.floor(Math.random()*(d.items.length))].media.m; } }; if(!ktndata){ var jp=document.createElement('script'); jp.setAttribute('type','text/javascript'); jp.setAttribute('src','http://api.flickr.com/services/feeds/photos_public.gne?tags=kitten&tagmode=any&format=json&jsoncallback=fcb'); document.getElementsByTagName('head')[0].appendChild(jp); } else{ fcb(ktndata); } })()

// makes all images random pictures of cats.