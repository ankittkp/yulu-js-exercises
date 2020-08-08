// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = null;
        this.parent = null;
        this.children = [];
    }
    add(data){
        return this.data = data;
    }
    remove(){
        return this.data = null;
    }
}

class Tree {
    constructor(data) {
        this.root = null;
    }
    add(data){
        let node = new Node(data);
        this.root = node;
    }
    remove(){

    }

    traverseDF(node){
        if(!node){
            return node.data;
        }
        for(let i =0, length = node.children.length; i<length;i++){
            this.traverseDF(node.children[i]);
        }

    }
}

module.exports = { Tree, Node };
