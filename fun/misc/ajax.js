
//first off, use this.

javascript:void(function(){document.body.appendChild(document.createElement('script')).src='http://code.jquery.com/jquery-1.7.2.min.js' })();

/then, insert this.

javascript:var ajaxtooltip={fadeeffect:[!0,300],useroffset:[10,10],loadingHTML:'<div style="font-style:italic"><img src="ajaxload.gif" /> Fetching Tooltip...</div>',positiontip:function(t,i){var o=window.innerWidth?window.innerWidth-15:ajaxtooltip.iebody.clientWidth-15,e=window.innerHeight?window.innerHeight-18:ajaxtooltip.iebody.clientHeight-15,a=t.get(0).offsetWidth,s=t.get(0).offsetHeight,n=i.pageX+this.useroffset[0],f=i.pageY+this.useroffset[1];n=i.clientX+a>o?n-a-2*this.useroffset[0]:n,f=i.clientY+s>e?f-s-2*this.useroffset[0]:f,t.css({left:n,top:f})},showtip:function(t,i){this.fadeeffect[0]?t.hide().fadeIn(this.fadeeffect[1]):t.show()},hidetip:function(t,i){this.fadeeffect[0]?t.fadeOut(this.fadeeffect[1]):t.hide()}};jQuery(document).ready(function(){ajaxtooltip.iebody=document.compatMode&&"BackCompat"!=document.compatMode?document.documentElement:document.body;var t=[];$('*[title^="ajax:"]').each(function(i){this.titleurl=jQuery.trim(this.getAttribute("title").split(":")[1]),this.titleposition=i+" pos",t.push($('<div class="ajaxtooltip"></div>').appendTo("body"));var o=$(this);o.removeAttr("title"),o.hover(function(i){var o=t[parseInt(this.titleposition)];o.get(0).loadsuccess?(ajaxtooltip.positiontip(o,i),ajaxtooltip.showtip(o,i)):(o.html(ajaxtooltip.loadingHTML).show(),o.load(this.titleurl,"",function(){ajaxtooltip.positiontip(o,i),ajaxtooltip.showtip(o,i),o.get(0).loadsuccess=!0}))},function(i){var o=t[parseInt(this.titleposition)];ajaxtooltip.hidetip(o,i)}),o.bind("mousemove",function(i){var o=t[parseInt(this.titleposition)];ajaxtooltip.positiontip(o,i)})})});

