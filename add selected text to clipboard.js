window.focus(),setTimeout(async()=>{clipBoard=await navigator.clipboard.readText(),navigator.clipboard.writeText(clipBoard+" | "+window.getSelection())},500);
