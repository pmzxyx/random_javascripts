javascript:var $jscomp=$jscomp||{};$jscomp.scope={},$jscomp.arrayIteratorImpl=function(e){var r=0;return function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}}},$jscomp.arrayIterator=function(e){return{next:$jscomp.arrayIteratorImpl(e)}},$jscomp.makeIterator=function(e){var r="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return r?r.call(e):$jscomp.arrayIterator(e)},function(){if(0!==document.querySelector("#player-unavailable").getBoundingClientRect().width){var e=window.location.toString();e=(e=e.replace("youtube","youpak")).replace("/watch","/embed"),e+="&autoplay=true";for(var r=$jscomp.makeIterator(document.querySelectorAll("#player-unavailable > *")),t=r.next();!t.done;t=r.next())t.value.remove();document.querySelector("#player-unavailable").insertAdjacentHTML("afterbegin",'<iframe style="width: 100%; height: 100%" src="'+e.toString()+'" frameborder="0" allowfullscreen></iframe>')}}();
