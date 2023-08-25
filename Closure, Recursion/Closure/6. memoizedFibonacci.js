//	  գրված է ըստ պահանջի,  բայց էֆեկտիվ չէ fibonacci recursive կանչվելու պատճառով

function fibonacci(n) {
    if(n < 2) return n
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function memoize(func) {
      let cache = {}; 
      return (number) => {
          if(cache[number] === undefined) {
              cache[number] = func(number);
          }
          return cache[number];
      }
  }
  
  const memoizedFibonacci = memoize(fibonacci);
  
  alert(memoizedFibonacci(43));
  alert(memoizedFibonnaci(43));
  
  //       իմ տարբերակը
  
function memoization(func) {
    let cache = {}; 
    return (number) => {
        if(cache[number] === undefined) {
            cache[number] = func(number);
        }
        return cache[number];
    }
}

const memoFib = memoization(function(n) {
    if(n < 2) return n;
      return memoFib(n - 1) + memoFib(n - 2);
})


alert(memoFib(100));
  