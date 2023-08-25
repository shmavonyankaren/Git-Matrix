function countOccurrences(arr, current, obj ={}) {
    let key = arr.shift();
    if(obj[key] === undefined) {
        obj[key] = 1;
    } else {
        obj[key]++;
    }	
    
    if(arr.length === 0) {
        return obj[current];
    }
    
    return countOccurrences(arr, current, obj);
  }
  const numbers = [2, 3, 4, 2, 5, 4 , 4, 2, 6, 2]; 
  alert(countOccurrences(numbers, 4));