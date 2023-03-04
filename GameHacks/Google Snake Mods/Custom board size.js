//First off, insert this code.
javascript:snake.size=function(settings={}){settings.lightSquares=settings.lightSquares||(settings.dark?"#47404F":"#AAD751"),settings.darkSquares=settings.darkSquares||(settings.dark?"#423C49":"#A2D149"),settings.width=settings.width||40,settings.height=settings.height||40;let squareSize=600/settings.width;squareSize*settings.height>530&&(squareSize=530/settings.height),squareSize=~~(.95*squareSize);let scripts=document.getElementsByTagName("script");for(let script of scripts){if(""===script.src||script.src.includes("apis.google.com"))continue;let req=new XMLHttpRequest;req.open("GET",script.src),req.onload=function(){let code=this.responseText;if(-1===code.indexOf("#A2"))return;let icon=new Image;if(icon.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png",icon.width=47,icon.height=47,document.querySelector("#size").childElementCount>3)for(let i=document.querySelector("#size").childElementCount-1;i>=3;i--)document.querySelector("#size").removeChild(document.querySelector("#size").children[i]);document.querySelector("#size").appendChild(icon);let c=code.match(/[a-zA-Z0-9_$]{1,8}\.prototype\.[a-zA-Z0-9_$]{1,8}=function\(\){var a=this,b=[^]*?canvas[^]*?\);return b\.promise}/)[0],wa=c.match(/a\.[a-zA-Z0-9_$]{1,8}\/128/)[0].replace("/128",""),size=code.match(/1===this\.[a-zA-Z0-9_$]{1,8}\|\|\(e\+=1\)/)[0].replace("1===this.","").replace("||(e+=1)","");console.log(size),eval(c.replaceAll("#AAD751",settings.lightSquares).replaceAll("#A2D149",settings.darkSquares).replace(`Math.floor(c/${wa}),Math.floor(d/${wa})));`,`a.${size} === 3 ? ${settings.width} : Math.floor(c/${wa}), a.${size} === 3 ? ${settings.height} : Math.floor(d/${wa})));a.${size} === 3 && (${wa} = ${squareSize});console.log(a.${size});`))},req.send()}};
//Then, change this however you like : 
 

snake.size({
  width:        integer,   // width of the board
  height:       integer,   // height of the board
  dark:         boolean,   // true/false, whether you want dark mode enabled
  lightSquares: '#rrggbb', // hex code, the color of light squares if you're using a non-dark custom scheme (optional)
  darkSquares:  '#rrggbb', // hex code, the color of dark squares if you're using a non-dark custom scheme (optional)
});

//then put into the devoloper console. integer = number, boolean = true or false, #rrggbb = (any color)
