function flattenArray(arr) {
    let NewOne = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        NewOne = NewOne.concat(flattenArray(arr[i]));
      } else {
        NewOne.push(arr[i]);
      }
    }
  
    return NewOne;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
alert(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
  