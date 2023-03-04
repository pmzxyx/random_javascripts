if (!window.hasOwnProperty('chickenPIZAAicecreamfamballsEZZZ1213131151313')) {
  var wait = (function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

var load = document.createElement("div")
document.body.parentNode.appendChild(load)
load.style = "background: #f0323e; position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 100%; height: 100%; z-index: 5000000000;"
var logo = document.createElement("img")
load.appendChild(logo)
logo.src = "https://raw.githubusercontent.com/pmzxyx/random_javascripts/main/minecraftlet/gerlandstuffstuff.png"
logo.style = "position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); width: calc(100% - 50%); height: auto;"
var bar = document.createElement("div")
load.appendChild(bar)
bar.style = "position: fixed; left: 50%; top: 80%; transform: translate(-50%, -80%); width: calc(100% - 50%); height: 5px; border: 3px solid white; background: linear-gradient(90deg, white 50%, transparent 50%); background-size: 200% auto; background-position: 0% 0%;"

var transition = [{
  backgroundPosition: "100% 0%"
}, {
  backgroundPosition: "0% 0%"
}]
var timing = {
  duration: 4000,
  iterations: 1,
  easing: "ease-in-out"
}

var show = [{
  opacity: 0
}, {
  opacity: 1
}]
var hide = [{
  opacity: 1
}, {
  opacity: 0
}]

load.animate(show, {
  duration: 500,
  iterations: 1,
  easing: "ease-in-out"
})

bar.animate(transition, timing)

function loadScript(url, callback) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = url;

  // Attach handlers for all browsers
  var done = false;
  script.onload = script.onreadystatechange = function() {
    if (!done && (!this.readyState ||
        this.readyState == "loaded" ||
        this.readyState == "complete")) {
      done = true;
      callback();
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
    }
  };

  head.appendChild(script);
}

wait(function() {
  loadScript("https://cdn.jsdelivr.net/gh/pmzxyx/random_javascripts@main/minecraftlet/title.js", function() {
    wait(function() {
      load.animate(hide, {
        duration: 500,
        iterations: 1,
        easing: "ease-in-out"
      })
      wait(function() {
        load.remove()
      }, 450)
    }, 5000);
  });
}, 1000)
window.chickenPIZAAicecreamfamballsEZZZ1213131151313 = true;
}
