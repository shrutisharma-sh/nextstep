import json


with open("data/roadmap.json", "r") as file:
    roadmap_data = json.load(file)

with open("data/skill_graph.json", "r") as file:
    graph_data = json.load(file)


def get_career_data(query):

    query_lower = query.lower()

    career = "devops"

    if "backend" in query_lower:
        career = "backend"

    career_info = roadmap_data[career]

    career_graph = graph_data[career]

    return {
        "career": career,
        "roadmap": career_info["roadmap"],
        "skills": career_info["skills"],
        "graph": career_graph
    }