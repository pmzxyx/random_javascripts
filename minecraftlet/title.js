var c = {
  c: function(p) {
    var e = document.createElement("canvas")
    p.appendChild(e)
    return e
  }
}

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

  loadScript("https://susstuff.repl.co/js/three.js", function() {
    var screens = [
      [], // Home
      [], //Settings
      [], // Credits
    ]

    var font = document.createElement('link');
    font.rel = "stylesheet";
    font.type = "text/css";
    font.href = "https://fontlibrary.org//face/minecraftia";
    document.head.appendChild(font);

    var c = {
      i: function(p) {
        var e = document.createElement("img")
        p.appendChild(e)
        return e
      },
      d: function(p) {
        var e = document.createElement("div")
        p.appendChild(e)
        return e
      },
      t: function(p, s, t) {
        var txt = c.d(p)
        txt.style = "position: relative; text-align: center; color: white; display: block; margin: auto; user-select: none; font-family: Minecraftia; font-size: 12px; text-shadow: 1px 1px black; margin-top: 10px; margin-bottom: 10px; text-decoration: none;"
        txt.innerHTML = t
        screens[s].push(txt)
        return txt
      },
      b: function(p, s, t, f) {
        var e = c.d(p)
        e.style = "position: relative; left: 0; top: 0; width: 400px; height: 40px; background: url(https://ma.susstuff.repl.co/ui/btn.png); background-position: 50% 0; background-repeat: no-repeat; background-size: cover; text-align: center; clear: right; display: block; margin: auto; margin-bottom: 10px; margin-top: 10px; image-rendering: pixelated;"
        var txt = c.d(e)
        txt.style = "color: white; display: block; margin: auto; transform: translate(0,10px); user-select: none; font-family: Minecraftia; font-size: 12px; text-shadow: 1px 1px black; text-decoration: none;"
        txt.innerHTML = t
        screens[s].push(e)
        doMouseEffects(e)
        e.addEventListener("click", f)
        return e
      }
    }

    var currentScreen = 0

    function doMouseEffects(e) {
      e.addEventListener("mouseenter", g => {
        e.style.backgroundPosition = "50% -40px"
        e.style.backgroundRepeat = "no-repeat"
        e.style.backgroundSize = "cover"
      })
      e.addEventListener("mouseleave", g => {
        e.style.backgroundPosition = "50% 0px"
        e.style.backgroundRepeat = "no-repeat"
        e.style.backgroundSize = "cover"
      })
    }

    function updateScreens() {
      screens.forEach((s, i) => {
        if (i == currentScreen) {
          s.forEach((e) => {
            e.style.display = "block"
          })
        } else {
          s.forEach((e) => {
            e.style.display = "none"
          })
        }
      })
    }

    function sc(s) {
      currentScreen = s
      updateScreens()
    }

    var closed = false

    // STUFF STARTS HERE

    var btns = c.d(document.body)
    btns.style = "position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%); z-index: 10000001; width: 70vw; height: 70vh;"

    var logo = c.i(btns)
    screens[0].push(logo)
    logo.style = "width: 500px; height: auto; margin: auto; margin-bottom: 50px; image-rendering: pixelated;"
    logo.src = "https://ma.susstuff.repl.co/ui/logo.png"

    // HOME
    var gcred = c.t(btns, 0, "Press E, T, and H")
    var sp = c.b(btns, 0, "Singleplayer", function() {
      close()
    })
    var stings = c.b(btns, 0, "Settings", function() {
      sc(1)
    })
    var creds = c.b(btns, 0, "Credits", function() {
      sc(2)
    })

    // SETTINGS
    var gcred = c.t(btns, 1, "No settings yet.")
    var sdone = c.b(btns, 1, "Done", function() {
      sc(0)
    })

    // CREDITS

    var gcred = c.t(btns, 2, "<a href='https://susstuff.repl.co' style='color: skyblue'>Susstuff</a> (Creator)")
    var tjcred = c.t(btns, 2, "THREE.js (Engine)")
    var mcred = c.t(btns, 2, "Minecraft (Assets)")
    var sdone = c.b(btns, 2, "Back", function() {
      sc(0)
    })

    updateScreens()

    function deg(d) {
      return THREE.MathUtils.degToRad(d)
    }

    const s = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000);
    const r = new THREE.WebGLRenderer();
    document.body.appendChild(r.domElement);
    const geometry = new THREE.SphereGeometry(5, 90, 90);
    geometry.scale(-1, 0.7, 1);
    var loader = new THREE.TextureLoader()

    const material = new THREE.MeshBasicMaterial({
      map: loader.load("https://cloudflare1.360gigapixels.com/pano/mirinae/00912327_2013_09_18_16.15.28_stitch.jpg/equirect_crop_3_1/6.jpg")
    })

    const sky = new THREE.Mesh(geometry, material)
    s.add(sky);
    r.domElement.style = "width: 100vw; height: 100vh; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 10000000;"

    function animate() {
      if (!closed) {
        requestAnimationFrame(animate);
      }
      const canvas = r.domElement;
      cam.aspect = (canvas.clientWidth) / canvas.clientHeight;
      cam.updateProjectionMatrix();
      r.setSize(window.innerWidth, window.innerHeight);
      sky.rotation.y += 0.0025
      r.render(s, cam);
    }

    function close() {
      btns.style.display = "none"
      s.remove.apply(s, s.children);
      closed = true
      loadScript("https://ma.susstuff.repl.co/builds/tjs/build.js", function() {})
    }

    animate();
  })
