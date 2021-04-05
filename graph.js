const graph = [ 
    [0,1,1,0,0],
    [0,0,1,0,1],
    [0,0,0,1,0],
    [0,0,0,0,1],
    [0,0,0,0,0]
]
console.log(graphD); 

class Node {
    constructor(){
        this.data = data; 
    }
}
// grafo dirigido 
class Graph{
    constructor(){
        this.nodes = []; 
        this.edges = []; 
    }
    addNode(data){ 
        const node = new Node(data); 
        this.nodes.push(node); 
    }
    getNodo() {  
       //  let node;
        if(this.nodes.length === 0) {
           return null; 
        }
        for(const i = 0; i< this.nodes.length; i++) {
            if(this.nodes[i].data === data) {
                nodo = this.nodes[i]; 
            }
        }
       //  return node; 
    }
    addEdge(data1, data2) { 
        const node1 = this.getNodo(data1); 
        const node2 = this.getNodo(data2); 
        const edge = [node1,node2];
        this.edges.push(edge); 
    }
    print(){ 
        for(const i = 0; i < this.edges.length; i++){
            console.log(`${this.edges[i][0].data} ----> ${this.edges[i][1].data}`); 
        }
    }
}

const myGraph = new Graph();
myGraph.addNode('Federico');
myGraph.addNode('Gera');
myGraph.addEdge('Gera', 'Federico'); 
myGraph.addNode('Mali');
myGraph.addEdge('Mali', 'Federico'); 

console.log(myGraph.print());  
