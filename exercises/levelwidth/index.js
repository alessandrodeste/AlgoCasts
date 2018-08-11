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
    let array = [root];
    let result = [1];
    while (array.length) {
        const v = array.reduce((acc, n) => acc + n.children.length, 0);
        if (v) result.push(v);
        array = array.reduce((acc, n) => [...acc, ...n.children], []);
    }
    return result;
}

module.exports = levelWidth;
