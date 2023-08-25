function createCalculator(method) {
	const methods = {
        add: (...arg) => {
          let arr = [...arg];
          return arr.reduce((aggr, val) => {
            return aggr + val;
          }, 0);
        },
        multiply: (...arg) => {
          let arr = [...arg];
          return arr.reduce((aggr, val) => {
            return aggr * val;
          }, 1);
        },
        decrese: (...arg) => {
          let arr = [...arg];
          return arr.reduce((aggr, val) => {
            return aggr - val;
          });
        },
        divide: (...arg) => {
          let arr = [...arg];
          return arr.reduce((aggr, val) => {
            return aggr / val;
          });
        },
  };
	
  return methods[method];
}

const add = createCalculator("add"); 
alert(add(3, 5, 3)); 
const multiply = createCalculator("multiply"); 
alert(multiply(2, 5, 10));
const decrese = createCalculator("decrese");
alert(decrese(10, 3, 5));
const divide = createCalculator("divide");
alert(divide(10, 5, 2));