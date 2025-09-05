/// eval.js
/// world main
function evaluateCode(x=void 0){try{let p=null!=x?x:prompt("Enter code to evaluate"),r=eval(p);if("object"==typeof r&&null!==r){let t=/\[object ([A-Za-z0-9-_ ]+)]/.exec(Object.prototype.toString.call(r)),e=t?t[1]:"Object",l=Object.keys(r).length;return alert(`${e} {${l>0?"...":""}}`),r}return alert(r),r}catch(t){return alert(t),t.stack||t}}

//terminator
void 0;
