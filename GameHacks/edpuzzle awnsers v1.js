javascript:var host = window.location.hostname; if (host == "edpuzzle.com") { var r = new XMLHttpRequest(); r.open("GET", "https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js", true); r.addEventListener("load", function(){eval(this.responseText);}); r.send();} else if (host == "edpuzzle.hs.vc") {alert("To use this, drag this button into your bookmarks bar. Then, run it when you're on an Edpuzzle assignment.")} else {alert("Please run this on an Edpuzzle assignment.")}
