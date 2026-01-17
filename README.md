# Sentiment Pulse – Real-Time Sentiment Analysis Browser Extension

Sentiment Pulse is a Chrome browser extension that performs real-time sentiment analysis on online comments and reviews. It helps users quickly understand public opinion without manually reading large volumes of content.

## Features
- Real-time sentiment analysis of comments
- Supports YouTube, Reddit, Amazon, Flipkart, and Quora
- Labels comments as Positive, Negative, or Neutral
- Interactive popup graph showing overall sentiment
- CSP-safe architecture using background service worker

## Tech Stack
- Chrome Extension (Manifest V3)
- JavaScript, HTML, CSS
- Python
- Flask
- NLP Sentiment Analysis

## How It Works
1. Content script detects visible comments on a webpage
2. Text is sent to the background service worker
3. Background script communicates with the Python backend
4. Backend analyzes sentiment and returns the result
5. Sentiment labels and summary graph are updated in real time

## Privacy
This extension only analyzes publicly visible text and does not collect private data, cookies, or user credentials.

## Future Enhancements
- Multilingual sentiment analysis (future)
- Toxic comment detection and hides the text if possible
- Creator-focused analytics dashboard at the extention pannel in the browser.
