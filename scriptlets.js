/// eval.js
/// alias rh.js
/// world isolated
/// dependency safe-self.fn
  function evaluateCode(x=undefined) {
  try {
      let p  = x != undefined && x != null ? x : prompt("Enter code to evaluate");
      let r = eval(p);
      if(typeof r == 'object') {
        let content = /\[object ([A-Za-z0-9 -_]+)]/gi.exec(new String(r));
        let cl = content ? content[1] || content[0] : "Object";
        let len = Object.keys(r).length;
        if(len == 0) {
          for (let key in document.body) {
            len++
          }
        };
        alert (`${cl} {${len > 0 ? "..." : ""}}`);
        return r;
      } else {
        alert(r);
        return r;
      };
  } catch (er) {
    alert(er);
    return er.stack || er;
  }
  };
