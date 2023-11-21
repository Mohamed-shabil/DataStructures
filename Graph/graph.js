class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex2].has(vertex1) &&
            this.adjacencyList[vertex1].has(vertex2)
        )
    }     
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }
        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacencyVertex)
        }

    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +"->"+[...this.adjacencyList[vertex]])
        }
    }
}


let g = new Graph();
g.addEdge('A')
g.addEdge('B')
g.addEdge('C')
g.addVertex("A","B")
g.addVertex("B","C")
g.addVertex("C","A")

g.display();