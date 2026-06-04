from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from services.emotion_service import detect_emotion
from services.roadmap_service import get_career_data
from services.market_service import get_market_insights
from services.guidance_service import generate_guidance
from services.graph_service import get_learning_path
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class CareerRequest(BaseModel):
    query: str


@app.get("/")
def home():
    return {
        "message": "AI Service Running"
    }


with open("data/roadmap.json", "r") as file:
    roadmap_data = json.load(file) 


with open("data/skill_graph.json", "r") as file:
    graph_data = json.load(file)


@app.post("/analyze")
def analyze_career(request: CareerRequest):

    emotion = detect_emotion(request.query)

    guidance = generate_guidance(emotion)

    career_data = get_career_data(request.query)

    market_insights = get_market_insights(
        career_data["career"]
    )

    target_skill = None

    query_lower = request.query.lower()

    for skill in career_data["skills"]:

        if skill.lower() in query_lower:
            target_skill = skill
            break

    learning_path = []

    if target_skill:

        learning_path = get_learning_path(
            career_data["career"],
            target_skill
        )

    return {
        "emotion": emotion,
        "guidance": guidance,
        **career_data,
        "market_insights": market_insights,
        "learning_path": learning_path
    }