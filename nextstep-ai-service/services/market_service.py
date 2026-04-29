import json


with open("data/market_data.json", "r") as file:
    market_data = json.load(file)


def get_market_insights(career):

    return market_data.get(career, {})