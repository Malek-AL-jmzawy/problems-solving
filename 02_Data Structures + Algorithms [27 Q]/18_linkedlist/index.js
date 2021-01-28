// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node { }

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    createNode(value) {
        const node = {}
        node.value = value
        node.next = null
        return node
    }
    addNode(value) {
        const newNode = this.createNode(value);
        if (!this.head) {
            this.head = newNode
        };
        if (this.tail) { 
            this.tail.next = newNode
        }
        this.tail = newNode
        return this.head
    }
    contains(value){
    var node = this.head
    while (node) {
        if (node.value===value) {
            return true
        }
        node=node.next
    }
    return false
    }
}

module.exports = { Node, LinkedList };
