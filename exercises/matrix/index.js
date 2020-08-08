// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];
    for (let i = 0; i < n; i += 1) results.push([]);
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        for (let tr = startColumn; tr <= endColumn; tr += 1) {
            results[startRow][tr] = counter;
            counter += 1;
        }
        startRow += 1;
        for (let rc = startRow; rc <= endRow; rc += 1) {
            results[rc][endColumn] = counter;
            counter += 1;
        }
        endColumn -= 1;
        for (let br = endColumn; br >= startColumn; br -= 1) {
            results[endRow][br] = counter;
            counter += 1;
        }
        endRow -= 1;
        for (let lc = endRow; lc >= startRow; lc -= 1) {
            results[lc][startColumn] = counter;
            counter += 1;
        }
        startColumn += 1;
    }
    return results;

}
module.exports = matrix;