function change(array) {
	let newArr = Array.from({length: array.length}, () => Array.from({length: array.length}, () => " "));
	for(let i = 0; i < array.length; i++) {
  	for(let j = 0; j < array[i].length; j++) {
				newArr[j][i] = array[i][j];
    }
  }
	return newArr;  
}

const data = [
	["K", "A", "E", "R", "N"],
  ["N", "E", "M", "R", "A"],
  ["N", "U", "N", "E", "K"],
  ["K", "I", "P", "S", "A"],
  ["N", "A", "R", "E", "R"],
];
console.log(change(data));