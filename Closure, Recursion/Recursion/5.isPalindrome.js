function isPalindrome(str) {
	let arr = str.split("");
	if(arr.length <= 1) {
  	return true;
  }
	if(arr.shift() !== arr.pop()) {
  	return false
  }
  str = arr.join("");
	return isPalindrome(str);
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("heleeh")); // Output: false