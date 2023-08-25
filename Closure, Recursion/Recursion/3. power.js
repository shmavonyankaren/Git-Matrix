function power(n1, n2) {
    if(n2 === 0) return 1;
    return power(n1, n2 - 1) * n1;
}

console.log(power(2, 4)); // Output: 8