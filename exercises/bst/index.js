// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = this.left; //this keyword refers to the object it belongs to.
        this.right = this.right;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(data)
    {
        var newNode = new Node(data);
        if(this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node,newNode){
        console.log(node.data);
        console.log(newNode.data);
        if(newNode.data < node.data)
        {
            if(!node.left) {
                node.left = newNode;
                console.log(node.left.data);
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else
        {
            if(!node.right)
                node.right = newNode;
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    contains(data) {
        if (!this.root) return;
        let current = this.root,
            found = false;

        while (current && !found) {
            if (data < current.data) current = current.left;
            else if (data > current.data) current = current.right;
            else found = true;
        };

        if (!found) return null;
        return current;
    };

}

module.exports = Node;
module.exports = BST;