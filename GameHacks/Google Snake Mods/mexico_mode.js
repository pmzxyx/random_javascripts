
// could not make bookmarklets.
//full:
if(window.snake)snake.mexico_mode = function() {
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    if(script.src === '' || script.src.includes('apis.google.com'))continue;
    const req = new XMLHttpRequest();
    req.open('GET', script.src)
    req.onload = function() {
      if(this.responseText.indexOf('trophy') === -1)
        return;
      
      eval(
        this.responseText.match(
          /s_a\(\"pKhWu\"\)\;[^]*{return this\.yjd}\);s_R\(s_gxa,s_JD\)\;/
        )[0].replace(
            `this.Pb = [];`,
            `        this.Pb = [
                {
                    "Gm": false,
                    "Iy": -1,
                    "Mb": {
                        "x": 1,
                        "y": 1
                    },
                    "kI": false
                },
                {
                    "Gm": false,
                    "Iy": -1,
                    "Mb": {
                        "x": 2,
                        "y": 1
                    },
                    "kI": false
                }
            ];`
        )
      );
    };
    req.send();
  }
};
