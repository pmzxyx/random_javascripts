var c = {
  c: function(p) {
    var e = document.createElement("canvas");
    p.appendChild(e);
    return e;
  }
};

function loadScript(url, callback) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.src = url;

  // Attach handlers for all browsers
  var done = false;
  script.onload = script.onreadystatechange = function() {
    if (
      !done &&
      (!this.readyState ||
        this.readyState == "loaded" ||
        this.readyState == "complete")
    ) {
      done = true;
      callback();
      script.onload = script.onreadystatechange = null;
      head.removeChild(script);
    }
  };

  head.appendChild(script);
}

loadScript("https://susstuff.repl.co/js/three.js", function() {
  // VALUES!!!! \\
  var plr = {
    x: 0,
    y: 0,
    z: 0,
    xv: 0,
    yv: 0,
    zv: 0,

    hp: 20,
    hps: false,
    hpj: true,

    hg: 20,

    spd: 1,
    jp: 0.15,
    atk: 0,
    slot: 0,
    item: 0,
    cd: 40,
    sw: 0,
    swy: 0,
    qi: 0,
    coll: false,
    moving: false,
    sprint: false,
    attack: false,
    switch: true
  };

  var cam = {
    x: 0,
    y: 6,
    yo: 0,
    xb: 0,
    yb: 0,
    z: 0,
    rx: 0,
    ry: 0,
    rz: 0,
    dr: 0,
    fov: 90,
    cfov: 90
  };

  var mouse = {
    x: 0,
    y: 0,
    xc: 0,
    yc: 0,
    sens: 0.5
  };

  var hnd = {
    x: 0,
    y: 0,

    xb: 0,
    yb: 0,

    xra: 0,
    yra: 0,
    zra: 0,

    xa: 0,
    ya: 0,
    px: 0,
    py: 0,
    pz: -1,

    rx: -20,
    ry: 45,
    rz: 0,

    xs: 0,
    ys: 0
  };

  var world = {
    grav: 75,
    fric: 0.6
  };

  var ctrls = {
    up: false,
    down: false,
    left: false,
    right: false,
    space: false,
    shift: false
  };

  var coll = [];

  var inv = [13, 14, 15, 0, 0, 0, 16, 17, 18];
  plr.slot = 1;
  plr.item = inv[plr.slot];

  function round(x) {
    return Math.floor(x + 0.5);
  }

  function p(s) {
    console.log(s);
  }

  function deg(d) {
    return THREE.MathUtils.degToRad(d);
  }

  var wait = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  const canv = document.createElement("canvas");
  document.body.appendChild(canv);
  const ui = canv.getContext("2d");
  canv.style =
    "position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 100vw; height: 100vh; pointer-events: none; z-index: 100000000000;"; //+ "background: red"

  // IMAGES IMAGES IMAGES!!!!!
  const hotbar = new Image();
  const hbslot = new Image();
  const crosshair = new Image();
  const tools = new Image();
  const bars = new Image();
  hotbar.src = "https://ma.susstuff.repl.co/ui/hotbar.png";
  crosshair.src = "https://ma.susstuff.repl.co/ui/crosshair.png";
  tools.crossOrigin = "anonymous";
  tools.src = "https://ma.susstuff.repl.co/items/tools.png";
  hbslot.src = "https://ma.susstuff.repl.co/ui/hbselect.png";
  bars.src = "https://ma.susstuff.repl.co/ui/bars.png"
  bars.crossOrigin = "anonymous"

  document.body.style.margin = "0";
  const scene = new THREE.Scene();
  const handscene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    cam.fov,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const handcam = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  scene.add(camera);
  scene.add(handcam);

  const loader = new THREE.TextureLoader();

  var pointLight = new THREE.PointLight(0xffffff, 0.5);
  var ambientLight = new THREE.AmbientLight(0xffffff, 1);
  var handlight = new THREE.PointLight(0xffb657, 2.5);
  pointLight.castShadow = true;
  ambientLight.castShadow = true;
  scene.add(ambientLight);
  handscene.add(handlight);
  scene.add(pointLight);
  pointLight.position.y = 6;

  scene.background = new THREE.Color("skyblue");

  const renderer = new THREE.WebGLRenderer();

  const player = new THREE.Mesh(
    new THREE.BoxGeometry(1, 2, 1),
    new THREE.MeshBasicMaterial({
      color: 0xffffff
    })
  );
  scene.add(player);
  const groundmesh = new THREE.BoxGeometry(200, 5, 200);
  const handmesh = new THREE.BoxGeometry(0.4, 1.4, 0.4);

  function pixel(e) {
    e.magFilter = THREE.NearestFilter;
  }

  function format(e) {
    pixel(e);
    e.wrapS = THREE.RepeatWrapping;
    e.wrapT = THREE.RepeatWrapping;
  }

  var gtt = loader.load("https://ma.susstuff.repl.co/blocks/grass_top.png");
  var gt = loader.load("https://ma.susstuff.repl.co/blocks/grass.png");
  var dt = loader.load("https://ma.susstuff.repl.co/blocks/dirt.png");
  var wtt = loader.load("https://ma.susstuff.repl.co/blocks/wood_top.png");
  var wt = loader.load("https://ma.susstuff.repl.co/blocks/wood.png");
  format(gtt);
  format(gt);
  format(dt);

  var ht1 = loader.load("https://ma.susstuff.repl.co/plr/hand1.png");
  var ht2 = loader.load("https://ma.susstuff.repl.co/plr/hand2.png");
  var htt = loader.load("https://ma.susstuff.repl.co/plr/hand5.png");
  var hbt = loader.load("https://ma.susstuff.repl.co/plr/hand3.png");
  pixel(ht1);
  pixel(ht2);
  pixel(htt);
  pixel(hbt);
  pixel(wt);
  pixel(wtt);

  var grassmat = [
    new THREE.MeshStandardMaterial({
      map: gt
    }),
    new THREE.MeshStandardMaterial({
      map: gt
    }),
    new THREE.MeshStandardMaterial({
      map: gtt
    }),
    new THREE.MeshStandardMaterial({
      map: dt
    }),
    new THREE.MeshStandardMaterial({
      map: gt
    }),
    new THREE.MeshStandardMaterial({
      map: gt
    })
  ];

  var woodmat = [
    new THREE.MeshBasicMaterial({
      map: wt
    }),
    new THREE.MeshBasicMaterial({
      map: wt
    }),
    new THREE.MeshBasicMaterial({
      map: wtt
    }),
    new THREE.MeshBasicMaterial({
      map: wtt
    }),
    new THREE.MeshBasicMaterial({
      map: wt
    }),
    new THREE.MeshBasicMaterial({
      map: wt
    })
  ];

  var handmat = [
    new THREE.MeshBasicMaterial({
      map: ht2
    }),
    new THREE.MeshBasicMaterial({
      map: ht1
    }),
    new THREE.MeshBasicMaterial({
      map: htt
    }),
    new THREE.MeshBasicMaterial({
      map: hbt
    }),
    new THREE.MeshBasicMaterial({
      map: ht2
    }),
    new THREE.MeshBasicMaterial({
      map: ht1
    }),
    8
  ];
  const icanv = document.createElement("canvas");
  const itx = icanv.getContext("2d");

  function updateItem() {
    itx.clearRect(0, 0, itx.canvas.width, itx.canvas.height);
    icanv.style.imageRendering = "pixelated";
    icanv.imageSmoothingEnabled = false;
    icanv.width = 16;
    icanv.height = 16;
    if (plr.item > 0) {
      plr.cd = 40;
      hand.visible = false;
      item.visible = true;
      var e = plr.item;
      var h = 0;
      while (e > 3) {
        e -= 3;
        h++;
      }
      itx.drawImage(tools, (e - 1) * 16, h * 16, 16, 16, 0, 0, 16, 16);
    } else {
      hand.visible = true;
      item.visible = false;
      plr.cd = 25;
    }
    itemtex.needsUpdate = true;
  }

  const ground = new THREE.Mesh(groundmesh, grassmat);
  ground.recieveShadow = true;
  ground.geometry.computeBoundingBox();

  const wood = new THREE.Mesh(new THREE.BoxGeometry(16, 16, 16), woodmat);
  wood.position.x = -32;
  wood.position.y = 6.5;
  scene.add(wood);
  wood.castShadow = true;

  const quagmesh = new THREE.SphereGeometry(1, 16, 16);
  const quagtex = loader.load("https://ma.susstuff.repl.co/blocks/quag.png");
  const quagmat = new THREE.MeshPhongMaterial({
    color: 0xfffff,
    shininess: 100,
    specular: 0xfffff
  });
  pixel(quagtex);
  quagmat.shininess = 100;
  const quag = new THREE.Mesh(quagmesh, quagmat);
  const quagface = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      map: quagtex
    })
  );
  quag.rotation.y = deg(180);
  quag.position.z = 4;
  quag.position.y = 0;
  quagface.position.z = 1;
  scene.add(quag);
  quag.add(quagface);
  ground.position.y = -4;

  gtt.repeat.set(200, 200);
  gt.repeat.set(200, 5);
  dt.repeat.set(200, 5);

  const hand = new THREE.Mesh(handmesh, handmat);
  scene.add(ground);
  handscene.add(hand);
  renderer.autoClear = false;

  const itemtex = new THREE.CanvasTexture(itx.canvas);
  pixel(itemtex);
  const item = new THREE.Mesh(
    new THREE.PlaneGeometry(0.8, 0.8),
    new THREE.MeshBasicMaterial({
      map: itemtex,
      transparent: true
    })
  );
  const itemz = new THREE.Mesh(
    new THREE.PlaneGeometry(0.8, 0.8),
    new THREE.MeshMatcapMaterial({
      map: itemtex,
      transparent: true
    })
  );
  handscene.add(item);
  const item1 = itemz.clone();
  const item2 = itemz.clone();
  const item3 = itemz.clone();
  const item4 = itemz.clone();
  const item5 = itemz.clone();
  item.add(item1);
  item.add(item2);
  item.add(item3);
  item.add(item4);
  item.add(item5);

  player.geometry.computeBoundingBox();

  var plrcoll = new THREE.Box3().setFromObject(player);

  function makeCollision(e) {
    e.geometry.computeBoundingBox();
    var objcollide = new THREE.Box3().setFromObject(e);
    coll.push(objcollide);
  }

  makeCollision(wood);

  document.body.appendChild(renderer.domElement);
  renderer.domElement.onclick = function() {
    renderer.domElement.requestPointerLock();
  };
  renderer.domElement.requestPointerLock();
  renderer.domElement.style =
    "width: 100vw; height: 100vh; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 10000000;";

  renderer.domElement.addEventListener("mousemove", (e) => {
    const {
      movementX,
      movementY
    } = e;

    mouse.x -= movementX;
    mouse.y -= movementY;
    mouse.xc = movementX;
    mouse.yc = movementY;
  });

  renderer.domElement.addEventListener("mousedown", (e) => {
    if (e.button == 0) {
      plr.atk = 10;
      plr.attacking = true;
    }
  });

  // some functions

  var delta = 500;
  var lastKeypressTime = 0;

  function startSprint(e) {
    if (`${e.code}` == "KeyW") {
      if (!plr.sprint) {
        var thisKeypressTime = new Date();
        if (thisKeypressTime - lastKeypressTime <= delta && !plr.blocking) {
          plr.sprint = true;
          thisKeypressTime = 0;
        }
        lastKeypressTime = thisKeypressTime;
      }
    }
  }

  function endSprint(e) {
    if (`${e.code}` == "KeyW") {
      if (plr.sprint) {
        plr.sprint = false;
      }
    }
  }

  window.addEventListener("keyup", endSprint);
  window.addEventListener("keyup", startSprint);

  function updateScroll(e) {
    var add = round(e.deltaY / 9);
    setSlot(plr.slot + add);
  }

  window.addEventListener("wheel", updateScroll);

  // updating!!!!!!!!!!!! \\

  function updateAtk() {
    if (plr.attacking) {
      plr.atk += 1;
      if (plr.item == 0) {
        hnd.xa = -40 + Math.sin(plr.atk / 5) * -70 - innerWidth / 7;
        hnd.ya = -130 + Math.sin(plr.atk / 5) * 200;
        hnd.rx = -20 + Math.sin(plr.atk / 10) * -40;
      } else {
        hnd.xa = -innerWidth / 4 + Math.cos(plr.atk / 6.5) * innerWidth / 4;
        hnd.ya = -500 + Math.sin(plr.atk / 5) * 500;
        hnd.pz = -1 - (0.5 - Math.sin(plr.atk / 5) * 0.5);
        hnd.rz = 245 + Math.sin(plr.atk / 5) * -245;
      }

      if (plr.atk > plr.cd) {
        plr.attacking = false;
        plr.atk = 0;
        hnd.xa = 0;
        hnd.ya = 0;
        hnd.px = 0;
        hnd.py = 0;
        hnd.pz = -1;
        hnd.rx = -20;
        hnd.ry = 45;
        hnd.rz = 0;
      }
    }
    if (plr.switch) {
      plr.sw++;
      plr.swy = -Math.sin(plr.sw / 6) * 500;
      if (plr.sw > 7.5) {
        plr.item = plr.qi;
      }
      if (plr.sw > 15) {
        plr.sw = 0;
        plr.swy = 0;
        plr.switch = false;
      }
    }
  }

  function updateColl() {
    var touching = false;
    plrcoll = new THREE.Box3().setFromObject(player);
    coll.forEach((e) => {
      if (e.intersectsBox(plrcoll)) {
        touching = true;
      }
    });
    plr.coll = touching;
  }

  function updateHand() {
    hand.position.x = hnd.px;
    hand.position.y = hnd.py;
    hand.position.z = hnd.pz;
    hand.rotation.x = deg(hnd.rx);
    hand.rotation.y = deg(hnd.ry);
    hand.rotation.z = deg(hnd.rz);
    hand.rotation.order = "YXZ";
    hand.visible = false;

    //x: 0,
    //y: 0,

    //rx: -20,
    //ry: 45,
    //rz: 0,

    item.position.x = hnd.px + 0.4 + hnd.x/500;
    item.position.y = hnd.py - 0.35 + hnd.y/500;
    item.position.z = hnd.pz + 0.3;
    item.rotation.x = deg(hnd.rx + 20);
    item.rotation.y = deg(hnd.ry - 45 - 75);
    item.rotation.z = deg(hnd.rz + 20 + plr.yv * 10);
    item.rotation.order = "YXZ";
    item1.position.z = -0.02;
    item2.position.z = -0.04;
    item3.position.z = -0.06;
    item4.position.z = -0.08;
    item5.position.z = -0.1;

    if (plr.item == 0) {
      hnd.xs += mouse.xc / 5 + hnd.xb - hnd.xs / 5;
      hnd.ys += mouse.yc / 5 + hnd.yb - hnd.ys / 5;
      hnd.x = hnd.xa + hnd.xs;
      hnd.y = hnd.ya + hnd.ys - plr.yv * 100 + plr.swy;
    } else {
      //hnd.xs += ((mouse.xc / 5 + hnd.xb + hnd.xa) - (hnd.xs) / 5)
      //hnd.ys += ((mouse.yc / 5 + hnd.yb + hnd.ya) - (hnd.ys) / 5)
      hnd.xs += mouse.xc / 5 + hnd.xb - hnd.xs / 5;
      hnd.ys += mouse.yc / 5 + hnd.yb - hnd.ys / 5;
      hnd.x = hnd.xa + hnd.xs + 100;
      hnd.y = hnd.ya + hnd.ys + 25 - plr.yv * 100 + plr.swy;
    }

    if (plr.moving && plr.y < 0.1) {
      hnd.xb = Math.cos(new Date().getTime() * (plr.spd / 225)) * 15;
      hnd.yb = Math.cos(new Date().getTime() * (plr.spd / 112.5)) * 12;
    } else {
      hnd.xb = 0;
      hnd.yb = 0;
    }
  }

  function updateCam() {
    camera.position.x = cam.x;
    camera.position.y = cam.y;
    camera.position.z = cam.z;
    camera.rotation.x = deg(cam.rx);
    camera.rotation.y = deg(cam.ry);
    camera.rotation.z = deg(cam.rz);
    cam.x = plr.x;
    cam.y = plr.y + cam.yo;
    cam.z = plr.z;
    cam.rx = mouse.y * mouse.sens + cam.xb + plr.yv * -10;
    cam.ry = mouse.x * mouse.sens + cam.yb;
    cam.rz = cam.dr
    cam.dr += (0 - cam.dr) / 5
    cam.xb += (hnd.yb / 20 - cam.xb) / 5;
    cam.yb += (hnd.xb / 20 - cam.yb) / 5;
    camera.rotation.order = "YXZ";
    cam.cfov += (cam.fov - cam.cfov) / 5;
    camera.fov = cam.cfov;
  }

  function updatePlr() {
    player.position.x = camera.position.x;
    player.position.y = camera.position.y;
    player.position.z = camera.position.z;
    plr.yv *= 0.99999999999999999999;
    plr.x += plr.xv;
    plr.y += plr.yv;
    plr.z += plr.zv;
    plr.yv -= world.grav / 10000;
    if (plr.y < 0 && plr.yv < -0.2) {
      cam.dr = 10
      plr.hp += round(plr.yv * 16)
      plr.hps = true
      wait(function() {
        plr.hps = false
      }, 200)
    }
    if (plr.hp <= 0) {
      plr.hp = 0
      updateUI()
      alert("yew died")
      window.location.replace("https://ma.susstuff.repl.co")
    }
    if (plr.y < 0) {
      plr.y = 0;
      plr.yv = 0;
      plr.xv *= world.fric;
      plr.zv *= world.fric;
    } else {
      plr.xv *= world.fric + 0.15;
      plr.zv *= world.fric + 0.15;
    }
    if (plr.hp < 5) {
      plr.hpj = true
    } else {
      plr.hpj = false
    }
  }

  function updateSize() {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    if (plr.item > 0) {
      handcam.aspect = canvas.clientWidth / canvas.clientHeight;
    } else {
      handcam.aspect = 1;
    }
    handcam.fov = 100 - window.innerWidth / 75;
    handcam.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.onkeydown = function(e) {
    if (e.which == 65) {
      ctrls.left = true;
    }
    if (e.which == 87) {
      ctrls.up = true;
    }
    if (e.which == 68) {
      ctrls.right = true;
    }
    if (e.which == 83) {
      ctrls.down = true;
    }
    if (e.which == 32) {
      ctrls.space = true;
    }
    if (e.which == 16) {
      ctrls.shift = true;
    }
    if (e.which == 84) {
      plr.x = 0;
      plr.y = 100;
      plr.z = 0;
    }
    if (e.which == 69) {
      alert("heheh..... E in e.which is 69!!!!!\r\nenjoy tha speed");
      renderer.domElement.requestPointerLock();
      world.fric = 0.85;
      world.grav = 10;
      plr.jp = 0.3;
    }
    if (e.which == 49) {
      setSlot(1);
    }
    if (e.which == 50) {
      setSlot(2);
    }
    if (e.which == 51) {
      setSlot(3);
    }
    if (e.which == 52) {
      setSlot(4);
    }
    if (e.which == 53) {
      setSlot(5);
    }
    if (e.which == 54) {
      setSlot(6);
    }
    if (e.which == 55) {
      setSlot(7);
    }
    if (e.which == 56) {
      setSlot(8);
    }
    if (e.which == 57) {
      setSlot(9);
    }
    if (e.which == 72) {
      plr.hp = Number(prompt("sethp", "num"))
      plr.hps = true
      wait(function() {
        plr.hps = false
        wait(function() {
          plr.hps = true
          wait(function() {
            plr.hps = false
          }, 100)
        }, 100)
      }, 100)
    }
  };
  window.onkeyup = function(e) {
    if (e.which == 65) {
      ctrls.left = false;
    }
    if (e.which == 87) {
      ctrls.up = false;
    }
    if (e.which == 68) {
      ctrls.right = false;
    }
    if (e.which == 83) {
      ctrls.down = false;
    }
    if (e.which == 32) {
      ctrls.space = false;
    }
    if (e.which == 16) {
      ctrls.shift = false;
    }
  };

  function setSlot(s) {
    if (s != plr.slot && inv[s - 1] != plr.item) {
      plr.switch = true;
      plr.sw = 0;
      if (s > 9) {
        s = 1;
      } else {
        if (s < 1) {
          s = 9;
        }
      }
      plr.qi = inv[s - 1];
      //p("slot: " + s + " item: " + plr.qi);
    }
    plr.slot = s;
  }

  setSlot(2);
  setSlot(1);

  function updateCtrls() {
    if (ctrls.right) {
      plr.x += plr.spd * 0.05 * Math.sin(((cam.ry + 90) * Math.PI) / 180);
      plr.z += plr.spd * 0.05 * Math.cos(((cam.ry + 90) * Math.PI) / 180);
      if (plr.coll) {
          plr.x += plr.spd * 0.05 * Math.sin(((cam.ry + 90) * Math.PI) / 180);
          plr.z += plr.spd * 0.05 * Math.cos(((cam.ry + 90) * Math.PI) / 180);
      }
    }
    if (ctrls.left) {
      plr.x += -plr.spd * 0.05 * Math.sin(((cam.ry + 90) * Math.PI) / 180);
      plr.z += -plr.spd * 0.05 * Math.cos(((cam.ry + 90) * Math.PI) / 180);
      if (plr.coll) {
          plr.x += plr.spd * 0.05 * Math.sin(((cam.ry + 90) * Math.PI) / 180);
          plr.z += plr.spd * 0.05 * Math.cos(((cam.ry + 90) * Math.PI) / 180);
      }
    }
    if (ctrls.up) {
      plr.x += -plr.spd * 0.05 * Math.sin((cam.ry * Math.PI) / 180);
      plr.z += -plr.spd * 0.05 * Math.cos((cam.ry * Math.PI) / 180);
      if (plr.coll) {
        plr.x += plr.spd * 0.05 * Math.sin((cam.ry * Math.PI) / 180);
          plr.z -= plr.spd * 0.05 * Math.cos((cam.ry * Math.PI) / 180);
      }
    }
    if (ctrls.down) {
      plr.x += plr.spd * 0.05 * Math.sin((cam.ry * Math.PI) / 180);
      plr.z += plr.spd * 0.05 * Math.cos((cam.ry * Math.PI) / 180);
      if (plr.coll) {
          plr.x -= plr.spd * 0.05 * Math.sin((cam.ry * Math.PI) / 180);
          plr.z += plr.spd * 0.05 * Math.cos((cam.ry * Math.PI) / 180);
      }
    }

    if (
      (ctrls.right == true ||
        ctrls.left == true ||
        ctrls.up == true ||
        ctrls.down == true) &&
      plr.y < 501
    ) {
      plr.moving = true;
    } else {
      plr.moving = false;
    }
    if (ctrls.space && plr.y < 0.1) {
      plr.yv = plr.jp;
    }
    if (
      (ctrls.right == true ||
        ctrls.left == true ||
        ctrls.up == true ||
        ctrls.down == true) &&
      plr.y < 501
    ) {
      plr.moving = true;
    } else {
      plr.moving = false;
    }
    if (ctrls.shift) {
      cam.yo = -0.2;
      plr.spd = 0.5;
      cam.fov = 90;
      plr.sprint = false;
    } else {
      cam.yo = 0;
      if (plr.sprint) {
        plr.spd = 2;
        cam.fov = 100;
      } else {
        plr.spd = 1.5;
        cam.fov = 90;
      }
    }
  }
  
    
  function collMove() {
  	updateColl()
    updateCam()
    updatePlr()
  }

  function updateUI() {
    var scale = 2;
    canv.width = innerWidth;
    canv.height = innerHeight;
    var iox = scale * 182;
    var is = (scale * 180) / 9;
    var bs = scale * 7;
    var ts = is - bs;
    var of = canv.width / 2 - (scale * 182) / 2;
    ui.imageSmoothingEnabled = true;
    ui.clearRect(0, 0, canv.width, canv.height);
    ui.globalAlpha = 0.7;
    ui.imageSmoothingEnabled = false;
    ui.drawImage(
      hotbar,
      canv.width / 2 - (scale * 182) / 2,
      canv.height - scale * 22 - 10,
      scale * 182,
      scale * 22
    );
    ui.globalAlpha = 0.5;
    ui.drawImage(
      crosshair,
      canv.width / 2 - 7.5,
      canv.height / 2 - 7.5,
      15,
      15
    );
    ui.globalAlpha = 1;
    // hotbar
    inv.forEach((e, i) => {
      if (e > 0) {
        var h = 0;
        while (e > 3) {
          e -= 3;
          h++;
        }
        ui.drawImage(
          tools,
          (e - 1) * 16,
          h * 16,
          16,
          16,
          i * is + of +7,
          canv.height - 47,
          31,
          32
        );
      }
    });
    ui.drawImage(
      hbslot,
      0,
      0,
      24,
      24, of +(plr.slot - 1) * is - 1,
      canv.height - 56,
      48,
      48
    );

    //hp
    var hof = 0
    var hh = 0

    if (plr.hps) {
      hof = 27
    }

    if (plr.hp > 20) {
      for (i = 1; i <= (plr.hp / 2 + 0.5); i++) {
        // layering hearts
        var rnd = 0
        if (plr.hpj) {
          rnd = Math.random() * 4.5
        }
        var ee = i
        if (ee > 10) {
          hh = 0
          while (ee > 10) {
            ee -= 10
            hh++
          }
        }
        if (plr.hp % 2 == 0) {
          ui.drawImage(bars, 0 + hof, 0, 9, 9, of +(ee - 1) * 18, canv.height - 80 - (20 * hh) + rnd, 18, 18)
        } else {
          if (i == plr.hp / 2 + 0.5) {
            ui.drawImage(bars, 9 + hof, 0, 9, 9, of +(ee - 1) * 18 - 0.5, canv.height - 80 - (20 * hh) + rnd, 18, 18)
          } else {
            ui.drawImage(bars, 0 + hof, 0, 9, 9, of +(ee - 1) * 18 - 0.5, canv.height - 80 - (20 * hh) + rnd, 18, 18)
          }
        }
      }
    } else {
      for (i = 1; i <= (plr.hp / 2); i++) {
        var rnd = 0
        if (plr.hpj) {
          rnd = Math.random() * 4.5
        }
        ui.drawImage(bars, 0 + hof, 0, 9, 9, of +(i - 1) * 18, canv.height - 80 + rnd, 18, 18)
      }
    }

    //blacked out hearts
    if (plr.hp < 20) {
      if (plr.hp % 2 == 0) {
        // even hearts
        for (i = 1; i <= (10 - plr.hp / 2); i++) {
          var rnd = 0
          if (plr.hpj) {
            rnd = Math.random() * 4.5
          }
          ui.drawImage(bars, 18 + hof, 0, 9, 9, of +(plr.hp / 2 + i - 1) * 18, canv.height - 80 + rnd, 18, 18)
        }
      } else {
        // odd hearts
        for (i = 1; i <= (10 - plr.hp / 2 + 0.5); i++) {
          var rnd = 0
          if (plr.hpj) {
            rnd = Math.random() * 4.5
          }
          if (i === 1) {
            ui.drawImage(bars, 9 + hof, 0, 9, 9, of +((i - 1) + (plr.hp / 2 - 0.5)) * 18, canv.height - 80 + rnd, 18, 18)
          } else {
            ui.drawImage(bars, 18 + hof, 0, 9, 9, of +((i - 1) + (plr.hp / 2 - 0.5)) * 18, canv.height - 80 + rnd, 18, 18)
          }
        }
      }
    }
  }

  setInterval(function() {
    if (plr.hp < 20) {
      plr.hp++
      plr.hps = true
      wait(function() {
        plr.hps = false
        wait(function() {
          plr.hps = true
          wait(function() {
            plr.hps = false
          }, 100)
        }, 100)
      }, 100)
    }
  }, 2500)

  function render() {
  	updateColl();
    updateUI();
    updateSize();
    updateCam();
    updateAtk();
    updateHand();
    updateItem();
    updateCtrls();
    updatePlr();

    if (!plr.switch) {
      plr.item = inv[plr.slot - 1]
    }

    ground.position.x = round(plr.x / 128) * 128;
    ground.position.z = round(plr.z / 128) * 128;

    renderer.clear();
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
    renderer.clearDepth();
    // hand
    updateSize();
    if (plr.item == 0) {
      renderer.setViewport(
        hnd.x - 50 + window.innerWidth / 1.7,
        window.innerHeight / -6 + hnd.y - window.innerWidth / 6 + 25,
        window.innerWidth / 3.4 + 300,
        window.innerHeight + window.innerWidth * 0.2 - window.innerHeight + 250
      );
      hand.visible = true;
      item.visible = false;
    } else {
      renderer.setViewport(
        window.innerWidth / 3 - window.innerHeight / 2 - 0,
        window.innerHeight / 2.5 + window.innerWidth / 15 - 400,
        window.innerWidth + 50,
        window.innerHeight + 50
      );
      hand.visible = false;
      item.visible = true;
    }
    renderer.render(handscene, handcam);
    if (plr.hp > 0) {
      requestAnimationFrame(render);
    }
  }

  render();
});
