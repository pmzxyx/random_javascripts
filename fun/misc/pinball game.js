function choose(e){return e[Math.floor(Math.random()*e.length)]}function newHex(e,t){void 0===e&&(e=0),void 0===t&&(t=16);for(var s=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],n="#",o=0;o<6;o++)n+=choose(s.slice(e,t));return n}function newByte(e,t,s){void 0===t&&(t=0),void 0===s&&(s=256);for(var n=[],o=0;o<256;o++)n.push(o);var r="rgba(";for(o=0;o<3;o++)r+=choose(n.slice(t,s))+",";return r+(e+")")}function newBlock(e){for(var t=[0,1,2,2,3,3,3,3,4,4,5,5],s=[],n=0;n<blocks.length;n++)for(var o=0;o<e[t[n]];o++)s.push(blocks[n]);return choose(s)}var compass,edges,goal,ball,blocks=[full={img:1,goto:[0,1,2,3]},empty={img:0,goto:[2,3,0,1]},bslash={img:1,goto:[1,0,3,2]},slash={img:0,goto:[3,2,1,0]},cornertr={img:[1,1,0,0],goto:[0,1,3,2]},cornerbr={img:[1,0,0,1],goto:[0,2,1,3]},cornerbl={img:[0,0,1,1],goto:[1,0,2,3]},cornertl={img:[0,1,1,0],goto:[3,1,2,0]},vpipe={img:[1,0,1,0],goto:[0,3,2,1]},hpipe={img:[0,1,0,1],goto:[2,1,0,3]},ccw={img:1,goto:[1,2,3,0]},cw={img:0,goto:[3,0,1,2]}],spinster=document.createElement("style");spinster.innerHTML="@keyframes cwise{ from{transform:rotate(0deg);} to{transform:rotate(360deg);} }",spinster.innerHTML+="@keyframes ccwise{ from{transform:rotate(360deg);} to{transform:rotate(0deg);} }",document.body.appendChild(spinster);var span=3,distribution=[0,2,1,0,0,0],zoom=75,unit=zoom/span,speed=.1,game=document.createElement("div");game.style.position="fixed",game.style.top="50%",game.style.left="50%",game.style.transform="translate(-50%,-50%)",game.style.transition=speed+"s opacity",game.style.zIndex="9999";var corners=document.getElementsByClassName("cornerBox"),inners=document.getElementsByClassName("innerBox"),rawEdges=document.getElementsByClassName("edgeBox"),lvl=1,pts=0,hp=15,board=document.createElement("div");board.style.background="white",board.style.textAlign="center",board.style.position="fixed",board.style.top=(100+zoom)/2+"vmin",board.style.left="50%",board.style.transform="translateX(-50%)",board.style.transition=speed+"s opacity",board.style.border="1px solid black",board.style.padding="1vmin",board.style.borderRadius="1vmin",board.style.zIndex="9999",document.body.appendChild(board);var tab=" &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; ";function newGame(e,t,s,n){if(void 0===e&&(e=span),span=e,void 0===t&&(t=distribution),distribution=t,void 0===s&&(s=zoom),unit=(zoom=s)/span,void 0===n&&(n=speed),speed=n,board.style.opacity=1,board.innerHTML="Lives: "+hp+tab+"Points: "+pts+tab+"Level: "+(span-2)+tab+"Sublevel: "+lvl+"/"+(span-2)+"</br>",0==hp||2==span)return hide(),disable(),ball.remove(),board.innerHTML+="GAME OVER",0;for(;game.lastChild;)game.removeChild(game.lastChild);for(game.remove(),game.style.background=newByte(3/4,64,192),game.style.height=zoom+"vmin",game.style.width=zoom+"vmin",game.style.borderRadius=.5*unit+"vmin",game.style.opacity=1,document.body.appendChild(game),compass=newBoard(),edges=[],i=0;i<rawEdges.length;i++)rawEdges[i].end=newPath(rawEdges[i].x,rawEdges[i].y),edges.push(rawEdges[i]);edges.sort(function(e,t){return e.end.steps-t.end.steps}),setTimeout(setUp,1e4*speed*(1+span/10))}function setUp(){ball=newBall((goal=newGoal()).x,goal.y),hide(),enable()}function newBoard(){for(var e=newHex(0,8),t=[],s=[],n=0;n<span;n++){t[n]=[],s[n]=[];for(var o=0;o<span;o++){var r=document.createElement("div");r.style.height=unit+"vmin",r.style.width=unit+"vmin",r.style.position="absolute",r.style.top=n*unit+"vmin",r.style.left=o*unit+"vmin",r.style.boxSizing="border-box",r.style.boxShadow="inset 0 0 3vmin "+game.style.backgroundColor,game.appendChild(r);var a=document.createElement("div");if(a.x=n,a.y=o,a.style.position="absolute",a.style.top=n*unit+"vmin",a.style.left=o*unit+"vmin",a.style.boxSizing="border-box",0==n&&0==o||0==n&&o==span-1||n==span-1&&o==span-1||n==span-1&&0==o){if(r.remove(),t[n][o]=blocks[0],s[n][o]="X",a.className="cornerBox",a.style.transition=speed+"s border-radius",0==n&&0==o)a.style.borderTopLeftRadius="50%",a.setAttribute("onMouseOver","this.style.borderTopLeftRadius='25%'"),a.setAttribute("onMouseOut","this.style.borderTopLeftRadius='50%'"),a.setAttribute("onClick","newGame()");else if(0==n&&o==span-1){var l=document.createElement("div");l.style.background="white",l.style.height=.5*unit+"vmin",l.style.width=.1*unit+"vmin",l.style.borderRadius=100/3+"%",l.style.position="absolute",l.style.top=1/4*unit+"vmin",l.style.left=.45*unit+"vmin",l.style.transform="rotate(45deg)",a.appendChild(l);var d=l.cloneNode();d.style.transform="rotate(-45deg)",a.appendChild(d),a.style.borderTopRightRadius="50%",a.setAttribute("onMouseOver","this.style.borderTopRightRadius='25%'"),a.setAttribute("onMouseOut","this.style.borderTopRightRadius='50%'"),a.setAttribute("onClick","game.style.opacity=0;board.style.opacity=0;setTimeout(function(){ game.remove(); board.remove(); },100)")}else n==span-1&&o==span-1?(a.style.borderBottomRightRadius="50%",a.setAttribute("onMouseOver","this.style.borderBottomRightRadius='25%'"),a.setAttribute("onMouseOut","this.style.borderBottomRightRadius='50%'"),a.setAttribute("onClick","hide()")):n==span-1&&0==o&&(a.style.borderBottomLeftRadius="50%",a.setAttribute("onMouseOver","this.style.borderBottomLeftRadius='25%'"),a.setAttribute("onMouseOut","this.style.borderBottomLeftRadius='50%'"),a.setAttribute("onClick","show()"))}else 0==n||n==span-1||0==o||o==span-1?(0==n||n==span-1?(t[n][o]=blocks[8],s[n][o]=0==n?[3,3,3,3]:[1,1,1,1]):(0==o||o==span-1)&&(t[n][o]=blocks[9],s[n][o]=0==o?[0,0,0,0]:[2,2,2,2]),a.className="edgeBox",a.style.background="rgba(0,0,0,0.25)",a.style.transition=2*speed+"s background"):(t[n][o]=newBlock(distribution),s[n][o]=t[n][o].goto,a.className="innerBox",a.style.borderRadius=100/3+"%",a.style.transition=2*speed+"s opacity");var $=t[n][o],g="innerBox"==a.className?"white":e;$==full||$==empty?(a.style.background=$.img?g:"transparent",a.style.height=unit+"vmin",a.style.width=unit+"vmin"):$==bslash||$==slash?(a.style.background=g,a.style.left=(o+.4)*unit+"vmin",a.style.height=unit+"vmin",a.style.width=.2*unit+"vmin",a.style.transform="rotate("+[45,-45][$.img]+"deg)"):$==cornertr||$==cornerbr||$==cornerbl||$==cornertl?(a.style.height=unit+"vmin",a.style.width=unit+"vmin",a.style.borderRight=.5*unit+"vmin solid "+($.img[0]?g:"transparent"),a.style.borderTop=.5*unit+"vmin solid "+($.img[1]?g:"transparent"),a.style.borderLeft=.5*unit+"vmin solid "+($.img[2]?g:"transparent"),a.style.borderBottom=.5*unit+"vmin solid "+($.img[3]?g:"transparent")):$==vpipe||$==hpipe?(a.style.height=unit+"vmin",a.style.width=unit+"vmin",a.style.borderRight=.2*unit+"vmin solid "+($.img[0]?g:"transparent"),a.style.borderTop=.2*unit+"vmin solid "+($.img[1]?g:"transparent"),a.style.borderLeft=.2*unit+"vmin solid "+($.img[2]?g:"transparent"),a.style.borderBottom=.2*unit+"vmin solid "+($.img[3]?g:"transparent")):$==ccw||$==cw?(a.style.background=g,a.style.left=(o+.4)*unit+"vmin",a.style.height=unit+"vmin",a.style.width=.2*unit+"vmin",a.style.animation=["cwise","ccwise"][$.img]+" "+5*speed+"s infinite linear"):console.log("Error: Unknown block entered into display()."),game.appendChild(a)}}return s}function newPath(e,t,s,n){void 0===s&&(s=compass[e][t][0]),void 0===n&&(n=0);var o=compass[e][t][s],r=[[0,1],[-1,0],[0,-1],[1,0]];return(e+=r[o][0],t+=r[o][1],0!=e&&e!=span-1&&0!=t&&t!=span-1)?newPath(e,t,(o+2)%4,compass[e][t]==empty.goto?n+1:n+2):{x:e,y:t,steps:n}}function newBall(e,t){var s=document.createElement("div");return s.style.background="white",s.style.position="absolute",s.style.top=e*unit+"vmin",s.style.left=t*unit+"vmin",s.style.width=.4*unit+"vmin",s.style.height=.4*unit+"vmin",s.style.borderRadius="50%",s.style.margin=.3*unit+"vmin",s.style.transition=speed+"s top, "+speed+"s left, "+speed+"s background",s.style.transitionTimingFunction="linear",s.style.pointerEvents="none",game.appendChild(s),s}function move(e,t,s,n,o){void 0===o&&(o=compass[s][n][0]),s>0&&s<span-1&&n>0&&n<span-1&&(getByXY(s,n).style.opacity=1);var r=compass[s][n][o],a=[[0,1],[-1,0],[0,-1],[1,0]];if(s+=a[r][0],n+=a[r][1],ball.style.top=unit*s+"vmin",ball.style.left=unit*n+"vmin",0!=s&&s!=span-1&&0!=n&&n!=span-1)setTimeout(function(){move(e,t,s,n,(r+2)%4)},1e3*speed);else{if(goal.end.x==e&&goal.end.y==t){for(var l=0;l<edges.length;l++)edges[l].style.background="rgba(0,128,0,0.5)";ball.style.background="green",pts+=goal.end.steps,lvl==span-2?(span++,lvl=1):lvl++}else{for(var l=0;l<edges.length;l++)edges[l].style.background="rgba(128,0,0,0.5)";ball.style.background="red",hp--,span>3&&(1==lvl?lvl=--span-2:lvl--)}setTimeout(show,1e4*speed),setTimeout(newGame,2e4*speed)}}function getByXY(e,t){for(var s=0;s<inners.length;s++)if(inners[s].x==e&&inners[s].y==t)return inners[s]}function hide(){for(var e=0;e<inners.length;e++)inners[e].style.opacity=0}function show(){for(var e=0;e<inners.length;e++)inners[e].style.opacity=1}function newGoal(){for(var e={},t=0;t<edges.length;t++)void 0==e[edges[t].end.steps]?e[edges[t].end.steps]=[edges[t]]:e[edges[t].end.steps].push(edges[t]);return choose(e[(key=Object.keys(e))[key.length-1]])}function enable(){for(var e=0;e<edges.length;e++)edges[e].style.background="transparent",edges[e].setAttribute("onMouseOver","this.style.background='rgba(0,0,0,0.25)'"),edges[e].setAttribute("onMouseOut","this.style.background='transparent'"),edges[e].setAttribute("onClick","guess("+goal.x+","+goal.y+","+edges[e].x+","+edges[e].y+")")}function disable(){for(var e=0;e<edges.length;e++)edges[e].style.background="rgba(0,0,0,0.25)",edges[e].removeAttribute("onMouseOver"),edges[e].removeAttribute("onMouseOut"),edges[e].removeAttribute("onClick")}function guess(e,t,s,n){disable(),move(s,n,e,t)}newGame();