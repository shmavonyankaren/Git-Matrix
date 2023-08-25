function generatePermutations(str) {
    const resulst = [];
    
    if (str.length <= 1) {
      return [str];
    }
  
    const first = str[0];
    const rest = str.slice(1);
    const permOfRest = generatePermutations(rest);
    for (const perm of permOfRest) {
      for (let i = 0; i <= perm.length; i++) {
        const newPerm = perm.slice(0, i) + first + perm.slice(i);
        resulst.push(newPerm);
      }
    }
  
    return resulst;
}
  
alert(generatePermutations("hello"));