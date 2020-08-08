// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slow_ptr = list.getFirst();
    let fast_ptr = list.getFirst();
    while(slow_ptr && slow_ptr.next && fast_ptr.next && fast_ptr){
        slow_ptr = slow_ptr.next;
        fast_ptr = fast_ptr.next.next;
        if(slow_ptr == fast_ptr){
            return true;
        }
    }
    return false;
}

module.exports = circular;
