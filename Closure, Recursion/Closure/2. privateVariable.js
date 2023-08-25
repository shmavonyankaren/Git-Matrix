function privateVariable(val) {
	let _current = val;
	return {
  	get: () => {
    	return _current;
    },
    set: (value) => {
		_current = value;
    },
  }
}

const secretValue = privateVariable(42);

console.log(secretValue.get());
secretValue.set(120);
console.log(secretValue.get());