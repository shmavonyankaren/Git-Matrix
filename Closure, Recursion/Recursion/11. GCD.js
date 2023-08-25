function gcd(number1, number2, i = number1) {
	if((number1 % i) === 0 && (number2 % i) === 0) {
  	return i;
  }
  return gcd(number1, number2, i-1);
}

alert(gcd(32, 48));