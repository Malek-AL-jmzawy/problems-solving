// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(){
        this.data=[];
         this.i=0;
    }
    push(elem){
        this.data[this.i] =elem
        this.i++
        return this.data[this.i-1]
    }
    pop(){
        if (this.i==0) {
            return
        }
        this.i--
        return this.data.pop()
    }
    peek(){
        return this.data[this.data.length-1]
    }
}

module.exports = Stack;
