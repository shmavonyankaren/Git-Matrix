function subsetSum(arr, currentSum) {
    if(arr.length === 0) {
        return false;
    }
    let forCompare =  arr.shift();
    for(let i = 0; i < arr.length; i++) {
        if(forCompare + arr[i] === currentSum) {
          return true;
      }
    }
    return subsetSum(arr, currentSum);
}

const inputArray = [2, 4, 6, 8];
alert(subsetSum(inputArray, 11)); // Output: true