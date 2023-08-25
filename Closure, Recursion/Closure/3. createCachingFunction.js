function createCachingFunction() {
	let cachedValues = {};
	return (val) => {
        let current = val * 2;
        if(!cachedValues.val) {
            cachedValues.val = current;
        }
        return cachedValues.val;
  }
}

const cachedCalculation = createCachingFunction();

console.log(cachedCalculation(0));
console.log(cachedCalculation(0));