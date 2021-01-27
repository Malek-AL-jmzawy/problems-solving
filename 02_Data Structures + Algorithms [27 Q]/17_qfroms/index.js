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
    constructor(sourceOne, sourceTwo){
        this.length=0
        this.S1Value=null
        this.S2Value=null
    }
    add (elem){
        if (this.length==0) {
            this.S1=new Stack
            this.S2=new Stack
        }
        this.S1.push(elem)
        this.S2.push(elem)
        return this.length++
    }
    remove (){
        this.S1.pop()
        this.S2.pop()
        return this.data.shift()
    }
    peek(){
        return this.S1.peek()
    }
}

module.exports = Queue;
