// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.sortedStack = new Stack();
        this.reverseStack = new Stack();
    }

    reverse (s1, s2) {
        let last = s1.pop();
        while(last) {
            s2.push(last);
            last = s1.pop();
        }
    }

    add(item) {
        this.reverse(this.sortedStack, this.reverseStack);
        this.reverseStack.push(item);
        this.reverse(this.reverseStack, this.sortedStack);
    }

    remove() {
        return this.sortedStack.pop();
    }

    peek() {
        return this.sortedStack.peek();
    }
}

module.exports = Queue;
