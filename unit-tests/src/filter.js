const filter = (array, predicate) => {
  if (!Array.isArray(array)) {
    throw new Error('First argument should be an ARRAY!');
  } 
  if (!array.length) {
    throw new Error('ARRAY is empty!');
  } 
  if (predicate === null) {
    throw new Error('Second argument should not be NULL!');
  } 
  if (!(typeof predicate === 'function') &&
      !(typeof predicate === 'object')   &&
      !(typeof predicate === 'string')) {
        throw new Error('Second argument should be a FUNCTION, OBJECT, ARRAY or STRING!');
      } 

  let res = [];
  let flag = true;


  for (let item of array) {
    flag = false;
    if (predicate instanceof Function) {
      flag = predicate(item);
    }
    else if (predicate instanceof Array) {
      flag = (item[predicate[0]] === predicate[1]);
    } 
    else if (typeof predicate === 'string') {
      flag = (item[predicate]);
    }
      
    else if (predicate instanceof Object) {
      for (let key of Object.keys(predicate)) {
        flag = (item[key] === predicate[key]);
        if (!flag) {
          break;
        } 
      }
    }

    if (flag) {
      res = [...res, item];
    } 
  }

  return res;

}

module.exports = filter;
  