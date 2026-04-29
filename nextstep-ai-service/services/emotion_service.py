from transformers import pipeline
import json


sentiment_pipeline = pipeline(
    "sentiment-analysis"
)


with open("data/emotion_keywords.json", "r") as file:
    emotion_keywords = json.load(file)


def detect_emotion(query):

    result = sentiment_pipeline(query)

    sentiment = result[0]["label"]

    query_lower = query.lower()

    emotion = "neutral"

    for emotion_type, keywords in emotion_keywords.items():

        if any(word in query_lower for word in keywords):
            emotion = emotion_type
            break

    if emotion == "neutral" and sentiment == "POSITIVE":
        emotion = "motivated"

    return emotion