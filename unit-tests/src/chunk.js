const chunk = (arr, size = 1) => {
  if (!Array.isArray(arr)) {
    throw new Error('First argument should be an ARRAY!');
  } 

  if (!arr.length) {
    throw new Error('ARRAY is empty!');
  } 

  if (!Number.isInteger(size)) {
    throw new Error('Second argument should be an INTEGER!');
  } 
  
  if (size <= 0) {
    throw new Error('SIZE should be a POSITIVE!');
  } 

  let res = [];
  let n = -1;

  for (let j = 0; j < arr.length; j++) {
    if ((j) % size === 0) {
      n++;
      res[n] = new Array;
    }
    res[n] = [...res[n], arr[j]];
  }

  return res;
}

module.exports = chunk;
  