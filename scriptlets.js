/// eval.js
/// world main
function evaluateCode(x = undefined) {
    let p = (x !== undefined && x !== null) ? x : prompt("Enter code to evaluate");
    let r = eval(p);

    if (typeof r === 'object' && r !== null) {
      let content = /\[object ([A-Za-z0-9-_ ]+)]/.exec(Object.prototype.toString.call(r));
      let cl = content ? content[1] : "Object";
      let len = Object.keys(r).length;
      alert(`${cl} {${len > 0 ? "..." : ""}}`);
      return r;
    } else {
      alert(r);
      return r;
    }
}

void 0;
