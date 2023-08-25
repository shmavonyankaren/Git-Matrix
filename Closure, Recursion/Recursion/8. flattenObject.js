function flattenObject(obj, New = "") {
	let NewOne = {};
  
  for(let key in obj) {
  	const newkey = New ? `${New}.${key}` : `${key}`;
  	if(typeof obj[key] === "object") {
      Object.assign(NewOne, flattenObject(obj[key],newkey));
    } else {
    	NewOne[newkey] = obj[key]; 
    }
  }
  
  return NewOne;
}

const nestedObject = { 
  a: 1, 
  b: { 
    c: 2, 
    d: { 
      e: 3, 
      f: 4, 
    }, 
  }, 
  g: 5, 
}; 

const flattenedObject = flattenObject(nestedObject); 
alert(JSON.stringify(flattenedObject));
/* 
{ 
    "a": 1, 
    "b.c": 2, 
    "b.d.e": 3, 
    "b.d.f": 4, 
    "g": 5 
}
*/