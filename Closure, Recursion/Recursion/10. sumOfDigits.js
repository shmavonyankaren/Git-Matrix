function sumOfDigits(number, sum = 0) {
	let arr = (number + "").split("");
  sum += +arr.shift();
  if(arr.length === 0) {
  	return sum;
  }
  number = +arr.join("");
  return sumOfDigits(number, sum)
}

alert(sumOfDigits(12345)); // Output: 15