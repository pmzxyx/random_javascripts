//just put this into your location, dont add "javascript" infront of it.
data:text/html;charset=utf-8,
<html>
<head> <title>My text editor</title>
<style>
body{height: 80vh;background:%232E2E2E;padding: 1.5rem; margin: 0;}
div:focus{ outline: none; }
.editor { background: %231E1E1E; height: 90%; width: 90%; border-radius: 10px; padding: 1rem; overflow: scroll; max-height:80%; font-family: Courier New; font-weight:bold; color:%23FFFFFF; font-size:1rem;  line-height:1.4;  max-width:90%;  height: 90%;  max-height:90%;  margin:0 auto;  }  
.editor::before { counter-reset: listing; }
.editor div { counter-increment: listing; }
.editor div::before { color: %23555; white-space: pre-wrap;  content: counter(listing) ". ";  display: inline-block;  width: 3em;  padding-left: auto;  margin-left: auto;  text-align: right; }  
.buttons {  padding-left: 5%;  padding-right: 5%;  padding-top: 0.5rem;  padding-bottom: 0.5rem;  }  
button { background: %23555;  color: %23EEE;  font-family: Courier New;  font-weight:bold;  padding: 8px 16px;  border-radius: 5px;  text-align: center;  font-size: 16px;  margin: 4px 2px;  opacity: 0.6;  transition: 0.3s;  display: inline-block;  text-decoration: none;  cursor: pointer;  }  
button:hover {opacity: 1}
::-webkit-scrollbar { height: 0px;  width: 20px;  background-color: %23222; }
::-webkit-scrollbar-thumb { background-color: %235E5E5E;  border-radius: 20px;  border: 6px solid transparent;  background-clip: content-box; }
</style>
</head>
<body>
<div class="editor" spellcheck="false"> <div contenteditable="true"> </div> </div>
<div class="buttons"> <button onclick="downloadContent(1)">Save</button> <button onclick="changeFontSize(2)">Text Size +</button> <button onclick="changeFontSize(-2)">Text Size -</button> </div>
<script>
function changeFontSize(val){ let txt = document.getElementsByClassName('editor')[0]; let style = window.getComputedStyle(txt).getPropertyValue('font-size'); let currentSize = parseFloat(style); txt.style.fontSize = (currentSize + val) + 'px'; }
function downloadContent(tmp){ let a = document.body.appendChild(document.createElement("a")); let today = new Date(); let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "-" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); a.download = "export" + date.toString() + ".txt"; let textToSave = document.getElementsByClassName("editor")[0]; a.href = "data:text/plain;charset=utf-8," + textToSave.innerText; a.click(); }
</script>
</body>
</html>
