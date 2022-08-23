const zip = (...arrays) => {
  for (let array of arrays) {
    if (!Array.isArray(array)) {
      throw new Error('All arguments should be ARRAYS!');
    } 

    if (!array.length) {
      throw new Error('ARRAY is empty!');
    } 
  }

  let n = arrays[0].length;
  for (let array of arrays) {
    if (array.length != n) {
      throw new Error('The Length of all ARRAYS should be equal!');
    } 
  }

  let res = [];

  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let array of arrays) {
      arr = [...arr, array[i]];
    }
    res = [...res, arr];
  }

  return res;
}

module.exports = zip;
  