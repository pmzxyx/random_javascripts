javascript:function GetData(){try{return JSON.parse(localStorage.getItem("playerStats-cubeform-marketjs"))}catch(t){return{}}}function SetData(t){try{return localStorage.setItem("playerStats-cubeform-marketjs",JSON.stringify(t)),!0}catch(e){return!1}}function SetHighscore(t){let e=GetData();return"{}"!=JSON.stringify(e)&&(e.highscore=t,SetData(e),!0)}prompt("What should the highscore be? \n Note: making this too high or not a number will break the game."),SetHighscore()?(alert("Set highscore!"),document.location.reload()):alert("There was an error.");

/* also by me */
