import json
import networkx as nx


with open("data/skill_graph.json", "r") as file:
    graph_data = json.load(file)


def build_graph(career):

    career_graph = graph_data[career]

    graph = nx.DiGraph()

    for node in career_graph["nodes"]:
        graph.add_node(node["id"])

    for link in career_graph["links"]:
        graph.add_edge(
            link["source"],
            link["target"]
        )

    return graph


def get_learning_path(career, target_skill):

    graph = build_graph(career)

    path = []

    try:

        ancestors = nx.ancestors(
            graph,
            target_skill
        )

        subgraph = graph.subgraph(
            ancestors | {target_skill}
        )

        path = list(
            nx.topological_sort(subgraph)
        )

    except:
        path = [target_skill]

    return path