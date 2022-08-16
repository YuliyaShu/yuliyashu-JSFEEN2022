const compact = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('First argument should be an ARRAY!');
    } 

    if (!arr.length) {
        throw new Error('ARRAY is empty!');
    } 

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            res = [...res, arr[i]];
        } 
    }
    return res;
  };

  module.exports = compact;
