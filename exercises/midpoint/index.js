// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    let slow_ptr = list.head;
    let fast_ptr = list.head;
    while(fast_ptr.next !=null && fast_ptr.next.next !=null) {
        console.log(fast_ptr.data);
        console.log(fast_ptr.data);
        fast_ptr = fast_ptr.next.next;

        slow_ptr = slow_ptr.next;

    }

    return slow_ptr;
}

module.exports = midpoint;
