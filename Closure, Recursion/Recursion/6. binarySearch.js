function binarySearch(arr, currentNumber, start = 0, end = arr.length) {
	const searchNumber = Math.floor((start + end) / 2);
	if(start === end) {
  	return -1;
  }
  if(arr[searchNumber] === currentNumber) {
  	return searchNumber;
  } else if (arr[searchNumber] > currentNumber) {
  	return binarySearch(arr, currentNumber, start, searchNumber);
  } else {
    return binarySearch(arr, currentNumber, searchNumber, end);
  }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]; 
alert(binarySearch(sortedArray, 13));
alert(binarySearch(sortedArray, 10));