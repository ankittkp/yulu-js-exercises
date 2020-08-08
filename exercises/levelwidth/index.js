// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let count =[0];
    let arr = [root];
    while(arr.length>1){
        const node = arr.shift();
        if(node == null){
            count.push(0);
        }
        else{
            arr.push(node.children);
            count[count.length-1]+=1;
        }
    }
    return count;
}

module.exports = levelWidth;
