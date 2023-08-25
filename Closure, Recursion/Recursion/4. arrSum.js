function arraySum(arr) {
  if(arr.length === 0) return 0;
  return arr.shift() + arraySum(arr);
}

alert(arraySum([1, 2, 3, 4, 5, 10])); // Output: 15