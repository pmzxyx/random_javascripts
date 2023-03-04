//Highlight selected text.
javascript:(function() {  var color = window.prompt("Enter a color (e.g. red, yellow, blue): MADE BY 2emk7");  if (!color) { return; }  var range = window.getSelection().getRangeAt(0);  var highlight = document.createElement("span");  highlight.style.backgroundColor = color;  highlight.appendChild(range.extractContents());  range.insertNode(highlight);})();
