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
    let count =0,i=0;
    let arr = [];
    arr.push(2);
    console.log(root.children[0].children[0].data);
    while(root){
        count++;
        arr.push(count);
        levelWidth(root.children[i]);
    }
    console.log(arr);
}

module.exports = levelWidth;
