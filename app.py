from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
app = Flask(__name__)
CORS(app)
@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text", "")
    if not text.strip():
        return jsonify({"error": "No text provided"}), 400
    analysis = TextBlob(text)
    polarity = analysis.sentiment.polarity
    if polarity > 0.1:
        sentiment = "POSITIVE"
    elif polarity < -0.1:
        sentiment = "NEGATIVE"
    else:
        sentiment = "NEUTRAL"
    return jsonify({
        "sentiment": sentiment,
        "polarity": round(polarity, 2)
    })
if __name__ == "__main__":
    app.run(debug=True)



