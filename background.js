chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type !== "ANALYZE") return;
  fetch("http://127.0.0.1:5000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: request.text })
  })
    .then(res => {
      if (!res.ok) throw new Error("Backend not reachable");
      return res.json();
    })
    .then(data => sendResponse(data))
    .catch(err => {
      console.warn("Backend fetch failed:", err.message);
      sendResponse({ error: true });
    });
  return true; // keep channel open
});
//the background keeps running to make the extension running as a ebtry level extension as its not yet published yet


