import json
import random


with open("data/guidance_data.json", "r") as file:
    guidance_data = json.load(file)


def generate_guidance(emotion):

    messages = guidance_data.get(
        emotion,
        guidance_data["neutral"]
    )

    return random.choice(messages)