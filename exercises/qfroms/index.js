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
    stack1;
    stack2;
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(data){
        this.stack1.push(data);
    }
    remove(){
        if(this.stack2.size()==0){
            if(this.stack1.size() ==0){
                return ;
            }
            while (this.stack1.size()>0){
                const p = this.stack1.peek();
                this.stack1.pop();
                this.stack2.push(p);
            }
        }
        return this.stack2.pop();
    }
    peek(){
        if(this.stack1.size()>0){
            return this.stack1.data[0];
        }
        return this.stack2[this.stack2.size() -1];
    }
}

module.exports = Queue;
