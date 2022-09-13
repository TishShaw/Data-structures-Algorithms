// Vertex or Node
// Edge or Connection is a node connected to another node.
// graphs can be weighted or unweighted

//        (A)

//   (E)        (B)

//     (D)    (C)

//        (A)

//   (E)        (B)     (F)

//     (D)    (C)

// Adjacency Matrix: stores graph connection edges
// Space complexity: O(|v|^2)

// // a -> b -> c -> d -> e
// a  0    1    0    0    1
// b  1    0    1    0    0
// c  0    1    0    1    0
// d  0    0    1    0    1
// e  1    0    0    1    0

// Add a vertex in a adjacency Matrix:
// Big O: O(|v|^2)

// // a -> b -> c -> d -> e
// a  0    1    0    0    1
// b  1    0    1    0    0
// c  0    1    0    1    0
// d  0    0    1    0    1
// e  1    0    0    1    0

// Adjacency List
// Space complexity: O(|v| + |E|)

// {
//     A: ["B", "E"],
//     B: ["A". "C"],
//     C: ["B", "D"],
//     D: ["C", "E"],
//     E: ["A", "D"]
// }

// Add a vertex in a adjacency list:
// Big O: O(1)

// {
//     A: ["B", "E"],
//     B: ["A", "C", "F"],
//     C: ["B", "D"],
//     D: ["C", "E"],
//     E: ["A", "D"],
//     F: ["B"]
// }

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
			return true;
		}
		return false;
	}

	addEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencyList[vertex1].push(vertex2);
			this.adjacencyList[vertex2].push(vertex1);
			return true;
		}
		return false;
	}

	removeEdge(vertex1, vertex2) {
		if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
			this.adjacencylist[vertex1] = this.adjacencyList[vertex1]
            .filter((v) => v !== vertex2);
			this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
            .filter((v) => v !== vertex1);
            return true;
		}
        return false;
	}

    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp)
        }
        delete this.adjacencyList[vertex];
        return this;
    }
}

let myGraph = new Graph();
