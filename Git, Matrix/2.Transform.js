function  Transform(array){
	return array.map(arr => {
       return arr.reduce((aggr, val) => {
        	if(aggr > val) {
          	return val;
          }
          return aggr;
       });
 });
}

const data = [
	[1, 2, 3, 5, 6],
  [12, 3, 9],
  [22, 5, 16],
  [9, 3],
  [9, 8],
];

alert(Transform(data));