function factorial(n) {
	if(n === 0) return 1;
  return n * factorial(n - 1);
}


alert(factorial(5)); // Output: 120