function createCounter() {
	let a = 1;
	return () => {
  	    return a++;
  }
}

const counter = createCounter();

alert(counter());
alert(counter());
alert(counter());