// Ultra-stable, error-proof version (class-based styling only)

setTimeout(() => {
  console.log("Sentiment Analyzer injected (error-proof mode)");
  const comments = document.querySelectorAll("div.q-text");
  console.log("Comments found:", comments.length);
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
        }
      }
    );
  });
}, 3000);


