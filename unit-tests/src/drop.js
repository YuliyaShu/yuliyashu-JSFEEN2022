const drop = (array, n = 1) => {
  if (!Array.isArray(array)) {
    throw new Error('First argument should be an ARRAY!');
  } 
  if (!array.length) {
    throw new Error('ARRAY is empty!');
  } 
  if (!Number.isInteger(n)) {
    throw new Error('Second argument should be an INTEGER!');
  } 
  if (n < 0) {
    throw new Error('SIZE should not be a NEGATIVE!');
  } 

  let res = [];
  
  for (let i = n; i < array.length; i++) {
    res = [...res, array[i]];
  }

  return res;
}

module.exports = drop;
  