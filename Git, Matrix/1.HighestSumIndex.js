function  HighestSumIndex(array){
	let NewArr =  array.map(arr => {
          return arr.reduce((aggr, val) => {
          		return aggr + val;
          }, 0);
        })
  let current = NewArr.reduce((aggr, val, index) => {
        	if(aggr < val) {
          	return val;
          }
          return aggr;
        });
        
  return NewArr.findIndex((val) => val === current);
}

const data = [
	[1, 2, 3, 5, 6],
  [12, 3, 9],
  [22, 5, 16],
  [9, 3],
  [9],
];

alert(HighestSumIndex(data));