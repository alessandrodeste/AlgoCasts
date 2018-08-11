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
        this.children = [];
        this.data = data;
    }

    add(val) {
        this.children.push(new Node(val));
    }

    remove(val) {
        this.children = this.children.filter(c => c.data !== val);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseBF(fn) {
        let array = [this.root];
        while (array.length) {
            array.map(c => fn(c));
            array = array.reduce((acc, n) => [...acc, ...n.children], []);
        }
    }
    traverseDF(fn) {
        const recursion = (n) => {
            fn(n);
            n.children.map(c => recursion(c));
        }
        recursion(this.root);
    }
}

module.exports = { Tree, Node };
