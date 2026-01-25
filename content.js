<<<<<<< HEAD
// Ultra-stable, error-proof version (class-based styling only)

setTimeout(() => {
  console.log("Sentiment Analyzer injected (error-proof mode)");
=======
console.log("Sentiment Analyzer injected (combat mode)");

function analyzeComments() {
  // Quora comment blocks (may change, but this works now)
>>>>>>> 580ddbb (content js update)
  const comments = document.querySelectorAll("div.q-text");

  console.log("Comments found:", comments.length);
<<<<<<< HEAD
  comments.forEach(comment => {
    // Prevent re-processing
    if (comment.dataset.sentimentDone === "true") return;
    const text = comment.innerText?.trim();
    if (!text || text.length < 30) return;
    // Lock immediately
    comment.dataset.sentimentDone = "true";
    chrome.runtime.sendMessage(
      { type: "ANALYZE", text },
      (data) => {
        // Hard safety check
        if (!data || data.error || !data.sentiment) return;
        try {
          const badge = document.createElement("span");
          badge.className = `sentiment-badge sentiment-${data.sentiment.toLowerCase()}`;
          badge.textContent = data.sentiment;
          comment.appendChild(badge);
        } catch (e) {
          // Silently ignore ALL UI edge cases
=======

  comments.forEach((comment, index) => {
    // Avoid re-analyzing the same comment
    if (comment.dataset.analyzed) return;
    comment.dataset.analyzed = "true";

    const text = comment.innerText.trim();
    if (!text) return;

    // Send text to backend
    fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    })
      .then(res => res.json())
      .then(data => {
        let badge = document.createElement("span");
        badge.style.marginLeft = "8px";
        badge.style.padding = "2px 6px";
        badge.style.borderRadius = "8px";
        badge.style.fontSize = "12px";
        badge.style.fontWeight = "bold";

        if (data.sentiment === "Positive") {
          badge.innerText = "🟢 Positive";
          badge.style.color = "#00ff9c";
          badge.style.border = "1px solid #00ff9c";
        } else if (data.sentiment === "Negative") {
          badge.innerText = "🔴 Negative";
          badge.style.color = "#ff4d4d";
          badge.style.border = "1px solid #ff4d4d";
        } else {
          badge.innerText = "🟡 Neutral";
          badge.style.color = "#ffd84d";
          badge.style.border = "1px solid #ffd84d";
>>>>>>> 580ddbb (content js update)
        }

<<<<<<< HEAD

=======
        comment.appendChild(badge);
      })
      .catch(err => {
        console.error("Sentiment API error:", err);
      });
  });
}

// Run once after load
setTimeout(analyzeComments, 3000);

// Observe dynamic loading (Quora loads comments later)
const observer = new MutationObserver(() => {
  analyzeComments();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
>>>>>>> 580ddbb (content js update)
