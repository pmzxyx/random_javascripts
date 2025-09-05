eval.js text/javascript
(function() {
  const evaluateCode(x) => {
  try {
      let p  = prompt("evaluate");
      let r = eval(p);
  } catch (er) {
    alert(er);
    return er;
  }
  };
})()

jsl.js text/javascript
(function() {
    /** ===================== STORAGE HELPERS ===================== */
    function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
    function load(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } }

    /** ===================== REQUEST LOGGER ===================== */
    if (!window.RequestLogger) window.RequestLogger = { fetch: [], xhr: [], ajax: [], websocket: [], _id: 0, recording: true };
    function newId() { return ++window.RequestLogger._id; }
    function makeFetchSnippet(url, options = {}) { return `fetch(${JSON.stringify(url)}, ${JSON.stringify(options, null, 2)})`; }

    function persistLogs() {
        if (!window.RequestLogger.recording) return; 
        let sessions = load("RequestLoggerSessions", []);
        const currentUrl = location.href;
        const last = sessions[sessions.length - 1];
        if (!last || last.url !== currentUrl) {
            sessions.push({ sessionId: last ? last.sessionId + 1 : 1, url: currentUrl, timestamp: Date.now(), logs: window.RequestLogger });
        } else { last.logs = window.RequestLogger; last.timestamp = Date.now(); }
        save("RequestLoggerSessions", sessions);
        renderLogs();
    }

    /** ===================== FETCH HOOK ===================== */
    const origFetch = window.fetch;
    window.fetch = async function(input, init = {}) {
        if (!window.RequestLogger.recording) return origFetch(input, init);
        const id = newId();
        let url, options = {};
        if (input instanceof Request) url = input.url, options = { method: input.method, headers: Object.fromEntries(input.headers.entries()), body: init.body || null, ...init };
        else url = input, options = init;
        let method = (options.method || "GET").toUpperCase();
        let entry = { id, type: "fetch", url, method, request: { headers: options.headers || {}, body: options.body || null, options }, response: null, timestamp: Date.now(), replay: makeFetchSnippet(url, options) };
        window.RequestLogger.fetch.push(entry); persistLogs();
        try {
            const response = await origFetch(input, init);
            let clone = response.clone(), text;
            try { text = await clone.text(); } catch(e) { text = "[unreadable body]"; }
            entry.response = { status: response.status, statusText: response.statusText, url: response.url, headers: [...response.headers.entries()], body: text };
            persistLogs();
            return response;
        } catch (err) { entry.response = { error: err.message }; persistLogs(); throw err; }
    };

    /** ===================== XHR HOOK ===================== */
    const origXHR = window.XMLHttpRequest;
    function XHRProxy() {
        const xhr = new origXHR(), id = newId(), entry = { id, type: "xhr", url: null, method: null, request: {}, response: null, timestamp: Date.now(), replay: null };
        window.RequestLogger.xhr.push(entry); persistLogs();
        let origOpen = xhr.open;
        xhr.open = function(method, url, async, user, password) { entry.method = method; entry.url = url; return origOpen.apply(xhr, arguments); };
        let origSend = xhr.send;
        xhr.send = function(body) {
            entry.request.body = body;
            xhr.addEventListener("loadend", function() {
                entry.response = { status: xhr.status, statusText: xhr.statusText, responseURL: xhr.responseURL, responseType: xhr.responseType, response: xhr.response };
                entry.replay = makeFetchSnippet(entry.url, { method: entry.method, body: entry.request.body });
                persistLogs();
            });
            return origSend.apply(xhr, arguments);
        };
        return xhr;
    }
    window.XMLHttpRequest = XHRProxy;

    /** ===================== JQUERY AJAX HOOK ===================== */
    if (window.jQuery && window.jQuery.ajax) {
        const origAjax = window.jQuery.ajax;
        window.jQuery.ajax = function(url, options) {
            if (!window.RequestLogger.recording) return origAjax.call(this, url, options);
            const id = newId();
            if (typeof url === "object") options = url, url = options.url;
            let method = (options && options.type) || "GET";
            let entry = { id, type: "ajax", url, method, request: { options }, response: null, timestamp: Date.now(), replay: makeFetchSnippet(url, { method, headers: options.headers || {}, body: options.data || null }) };
            window.RequestLogger.ajax.push(entry); persistLogs();
            let jqXHR = origAjax.call(this, url, options);
            jqXHR.then(function(data, textStatus, jqXHR) { entry.response = { status: jqXHR.status, statusText: jqXHR.statusText, response: data }; persistLogs(); })
                 .catch(function(err) { entry.response = { error: err }; persistLogs(); });
            return jqXHR;
        };
    }

    /** ===================== WEBSOCKET HOOK ===================== */
    const OrigWebSocket = window.WebSocket;
    window.WebSocket = function(url, protocols) {
        if (!window.RequestLogger.recording) return new OrigWebSocket(url, protocols);
        const id = newId(), ws = new OrigWebSocket(url, protocols);
        const entry = { id, type: "websocket", url, events: [], timestamp: Date.now(), replay: `new WebSocket(${JSON.stringify(url)}, ${JSON.stringify(protocols)})` };
        window.RequestLogger.websocket.push(entry); persistLogs();
        ws.addEventListener("open", () => entry.events.push({ event: "open", time: Date.now() }));
        ws.addEventListener("message", (e) => entry.events.push({ event: "message", time: Date.now(), data: e.data }));
        ws.addEventListener("close", () => entry.events.push({ event: "close", time: Date.now() }));
        ws.addEventListener("error", (e) => entry.events.push({ event: "error", time: Date.now(), data: e.message || e }));
        const origSend = ws.send;
        ws.send = function(data) { entry.events.push({ event: "send", time: Date.now(), data }); return origSend.apply(ws, arguments); };
        return ws;
    };

    /** ===================== COMMAND TOOL UI ===================== */
    const toggle = document.createElement("button");
    toggle.textContent = "⌨️";
    Object.assign(toggle.style, { position: "fixed", bottom: "15px", right: "15px", zIndex: 999999, width: "50px", height: "50px", borderRadius: "50%", background: "#222", color: "#fff", border: "none", fontSize: "22px", cursor: "pointer", boxShadow: "0 2px 10px rgba(0,0,0,0.5)" });
    document.body.appendChild(toggle);

    const panel = document.createElement("div");
    Object.assign(panel.style, { position: "fixed", bottom: "15px", right: "5%", width: "90%", maxWidth: "600px", maxHeight: "50vh", display: "flex", flexDirection: "column", background: "#1e1e1e", color: "#fff", fontFamily: "monospace", fontSize: "13px", zIndex: 999998, borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.6)", overflow: "hidden", boxSizing: "border-box", display: "none" });
    document.body.appendChild(panel);

    const tabHeader = document.createElement("div");
    Object.assign(tabHeader.style, { display: "flex", background: "#111", borderBottom: "1px solid #333" });
    panel.appendChild(tabHeader);

    const jsTabBtn = document.createElement("div"); jsTabBtn.textContent = "JS Console"; Object.assign(jsTabBtn.style, { flex: 1, textAlign: "center", padding: "6px", cursor: "pointer", borderBottom: "2px solid #1e1e1e" });
    const logTabBtn = document.createElement("div"); logTabBtn.textContent = "Request Log"; Object.assign(logTabBtn.style, { flex: 1, textAlign: "center", padding: "6px", cursor: "pointer", borderBottom: "2px solid #1e1e1e" });
    tabHeader.appendChild(jsTabBtn); tabHeader.appendChild(logTabBtn);

    const jsContent = document.createElement("div"); const logContent = document.createElement("div");
    [jsContent, logContent].forEach(c => { Object.assign(c.style, { flex: 1, padding: "8px", overflowY: "auto", display: "none", whiteSpace: "pre-wrap", flexDirection: "column" }); panel.appendChild(c); });
    jsContent.style.display = "flex";

    const inputBox = document.createElement("input"); inputBox.type = "text"; inputBox.value = load("LastCommand", "");
    Object.assign(inputBox.style, { border: "none", padding: "8px", background: "#2b2b2b", color: "#fff", fontFamily: "monospace", fontSize: "14px", outline: "none", width: "100%", boxSizing: "border-box" });
    panel.appendChild(inputBox);

    const recordBtn = document.createElement("button");
    recordBtn.textContent = "⏺️ Recording ON";
    Object.assign(recordBtn.style, { margin: "4px", padding: "4px", background: "#444", color: "#fff", border: "none", cursor: "pointer" });
    panel.appendChild(recordBtn);

    recordBtn.onclick = () => { window.RequestLogger.recording = !window.RequestLogger.recording; recordBtn.textContent = window.RequestLogger.recording ? "⏺️ Recording ON" : "⏹️ Recording OFF"; };

    jsTabBtn.onclick = () => { jsContent.style.display = "flex"; logContent.style.display = "none"; jsTabBtn.style.borderBottom = "2px solid #fff"; logTabBtn.style.borderBottom = "2px solid #1e1e1e"; };
    logTabBtn.onclick = () => { jsContent.style.display = "none"; logContent.style.display = "flex"; logTabBtn.style.borderBottom = "2px solid #fff"; jsTabBtn.style.borderBottom = "2px solid #1e1e1e"; };
    toggle.onclick = () => panel.style.display = panel.style.display === "flex" ? "none" : "flex";

    /** ===================== JS LOGGING ===================== */
    console.clear = () => { jsContent.innerHTML = ""; };
    function formatLog(obj) { if (obj === undefined) return "undefined"; if (obj === null) return "null"; if (typeof obj === "object") return `${obj.constructor.name} ${JSON.stringify(obj, null, 2)}`; return String(obj); }
    function logToPanel(msg) { let div = document.createElement("div"); div.textContent = formatLog(msg); jsContent.appendChild(div); jsContent.scrollTop = jsContent.scrollHeight; }

    inputBox.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const code = inputBox.value;
            save("LastCommand", code);
            try { 
                let result = eval(code); 
                logToPanel(">> " + code);
                logToPanel(result === undefined ? "undefined" : result);
            } catch(err) { logToPanel("Error: " + err.message); }
        }
    });

    /** ===================== REQUEST LOG DISPLAY ===================== */
    function renderLogs() {
        logContent.innerHTML = "";
        ["fetch","xhr","ajax","websocket"].forEach(type => {
            window.RequestLogger[type].forEach(entry => {
                const entryDiv = document.createElement("div");
                Object.assign(entryDiv.style, { margin: "3px 0", cursor: "pointer", userSelect: "none", display: "block" });
                // extract path without query params
                // extract path without query params
let path = entry.url || "";
const qIndex = path.indexOf("?");
if (qIndex !== -1) path = path.slice(0, qIndex);
entryDiv.textContent = `${entry.method || "WS"} ${path}`;
                const details = document.createElement("pre");
                Object.assign(details.style, { display: "none", whiteSpace: "pre-wrap", background: "#111", padding: "5px", margin: "2px 0" });
                details.textContent = JSON.stringify(entry, null, 2);
                entryDiv.appendChild(details);
                entryDiv.addEventListener("click", () => details.style.display = details.style.display === "none" ? "block" : "none");
                logContent.appendChild(entryDiv);
            });
        });
    }

    renderLogs();
})();
