test.js text/javascript
(function() {
  alert("test.js");
})();

eruda.js text/javascript
(function () { 
  var script = document.createElement('script'); 
  script.src="https://cdn.jsdelivr.net/npm/eruda"; 
  document.body.append(script); 
  script.onload = function () { 
    eruda.init(); 
    console.log("Eruda loaded");
  };
  script.onerror = function () {
    alert("Error loading Eruda");
    console.log("Eruda not loaded");
  };
})();

