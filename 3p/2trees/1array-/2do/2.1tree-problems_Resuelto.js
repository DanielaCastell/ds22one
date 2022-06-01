/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 * write it and make sure it runs
 */

 class Node {
  constructor(data){
      this.data = data;
      this.H=[];
  }
 }
 class Tree{
    constructor(){
        this.root = null;
    }

  add(data, toNodeData) {
    const node = new Node(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;

    if (parent) {
      parent.H.push(node);
    } else {
      if (!this.root) {
        this.root = node;
      } else {
        return "error 1 ";
      }
    }
  }

  findBFS(data) {
    let _node = null;

    this.traverseBFS((node) => {
      if (node.data == data) {
        _node = node;
      }
    });
    return _node;
  }

  traverseBFS(n1) {
    const queue = [this.root];

    if (n1) {
      while (queue.length) {
        const node = queue.shift();

        n1(node);

        for (const child of node.H) {
          queue.push(child);
        }
      }
    }
  }
 }
  

let arbol = new Tree();
arbol.add("1");
arbol.add("2", "1");
arbol.add("4", "2");
arbol.add("1", "2");
arbol.traverseBFS((node) => console.log(node));