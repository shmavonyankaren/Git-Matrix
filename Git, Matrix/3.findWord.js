function check(arr, row, col, word, i) {
  i++;
  if(i === word.length) {
    return true;
  }
  if(word[i] === arr[row - 1][col] && row - 1 > 0) {
    check(arr, row - 1, col, word, i);
  }
  if(word[i] === arr[row + 1][col] && row + 1 < arr.length) {
    check(arr, row + 1, col, word, i);
  }
  if(word[i] === arr[row][col + 1] && col + 1 < arr.length) {
    check(arr, row, col + 1, word, i);
  }
  if(word[i] === arr[row][col - 1] && col - 1 > 0) {
    check(arr, row, col - 1, word, i);
  }
return false;
}

function findWord(array, currentWord){
let i = 0;
let currentArray = currentWord.split("");
for(let row = 0; row < array.length; row++) {
for(let col = 0; col < array[row].length; col++) {
  if(currentArray[i] === array[row][col]) {
    if(check(array, row, col, currentArray, i)) {	
      return true;
    }
  }
}
}

return false
}

const data = [
["K", "A", "E", "R", "N"],
["N", "E", "M", "R", "A"],
["N", "U", "N", "E", "K"],
["K", "I", "P", "S", "A"],
["N", "A", "R", "E", "K"],
];

console.log(findWord(data, "KA"));