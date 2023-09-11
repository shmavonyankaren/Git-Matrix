function trimMatrix(matrix, k) {
    const n = matrix.length;
    const rowSums = new Array(n).fill(0);
    const colSums = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rowSums[i] += matrix[i][j];
            colSums[j] += matrix[i][j];
        }
    }

    const newMatrix = Array.from({ length: n },
        () => Array.from({ length: n }, 
        () => 0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (rowSums[i] <= k && colSums[j] <= k) {
                newMatrix[i][j] = matrix[i][j];
            }
        }
    }

    return newMatrix.map(row => row.filter(col => col !== 0)).filter(val => val.length !== 0);
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const k = 17;

const result = trimMatrix(matrix, k);

console.log(result);
