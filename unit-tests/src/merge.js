const merge = (object, ...sources) => {

  function mergeArray(arr, arrSource) {
    let arrRes = [...arr];
    for (let i = 0; i < Math.min(arr.length, arrSource.length); i++) {
      if (arr[i] instanceof Array) {
        arrRes[i] = mergeArray(arr[i], arrSource[i]);
      } 
      else if (arr[i] instanceof Object) {
        arrRes[i] = merge(arr[i], arrSource[i]);
      } 
      else {
        arrRes[i] = arrSource[i];
      } 
    }
    if (arrSource.length > arr.length) {
      for (let j = arr.length; j < arrSource.length; j++) {
        arrRes = [...arrRes, arrSource[j]];
      }
    }

    return arrRes;
  }

  if (!(object instanceof Object)) {
    throw new Error('First argument should be an OBJECT!');
  } 
  
  let res = Object.assign(object);

  for (let source of sources) {
    if (!(source instanceof Object)) {
      throw new Error('Sources arguments should be OBJECTS!');
    } 
    for (let key in source) {
      if (source[key] instanceof Array) {
        res[key] = mergeArray(object[key] || [], source[key]);
      } 
      else if (source[key] instanceof Object) {
        res[key] = merge(object[key] || {}, source[key]);
      } 
      else {
        res[key] = source[key];
      }  
    }
  }
  
    return res;
  }
  
  module.exports = merge;
    