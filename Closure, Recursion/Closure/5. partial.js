function add(a, b, c) {
	return a + b + c;
}

function partial(func, ...rest1) {
	return (...rest2) => {
		return add(...rest1, ...rest2);
    }
}

const add5 = partial(add, 20);
console.log(add5(5, 10));