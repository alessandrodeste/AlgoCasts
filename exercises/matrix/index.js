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
    const res = Array.from(new Array(n)).map(x => Array.from(new Array(n)))
    let counter = 1;
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;

    while(startRow <= endRow || startCol <= endCol) {
        // top
        for (let i = startCol; i <= endCol; i++) {
            res[startRow][i] = counter;
            counter++;
        }
        startRow++;
        
        // right
        for (let i = startRow; i <= endRow; i++) {
            res[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // bottom
        for (let i = endCol; i >= startCol; i--) {
            res[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // left
        for (let i = endRow; i >= startRow; i--) {
            res[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return res;
}

function matrix2(n) {
    let x = 0;
    let y = 0;
    const res = Array.from(new Array(n)).map(x => Array.from(new Array(n)))
    res[x][y] = 1;
    for(let i = 2; i <= (n * n); i++) {
        // move right
        if((y + 1) < n && res[x][y + 1] === undefined && (res[x - 1] === undefined || res[x - 1][y] !== undefined)) {
            y++;
            // move down
        } else if((x + 1) < n && res[x + 1] !== undefined && res[x + 1][y] === undefined) {
            x++;
            // move left
        } else if((y - 1) >= 0 && res[x][y - 1] === undefined) { 
            y--;
            // move top
        } else {
            x--;
        }
        res[x][y] = i;
    }
    console.log(res)
    return res;
}

module.exports = matrix;
