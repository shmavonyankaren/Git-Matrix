function biggestLength(arr) {
    let maxLength = 0;
    const board = Array.from({ length: arr.length },
                        () => Array.from({ length: arr.length }, 
                        () => 0));

    for (let row = 0; row < arr.length; row++) {
        for (let column = 0; column < arr.length; column++) {
            if (arr[row][column] === 1) {
                if (row === 0 || column === 0) {
                    board[row][column] = 1;
                } else {
                    board[row][column] =
                    Math.min(
                        board[row - 1][column],
                        board[row][column - 1],
                        board[row - 1][column - 1]
                    ) + 1;
                }

                if (board[row][column] > maxLength) {
                    maxLength = board[row][column];
                }
            }
        }
    }

    return maxLength;
}

console.log(
    biggestLength([
      [1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
]));