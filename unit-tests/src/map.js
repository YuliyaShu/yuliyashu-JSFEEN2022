const map = (collection, iteratee) => {
  if (!(typeof collection === 'object')) {
    throw new Error('First argument should be a COLLECTION!');
  } 

  if ((collection instanceof Array && !collection.length) || (collection instanceof Object && !Object.keys(collection).length)) {
    throw new Error('COLLECTION is empty!');
  }
    
  if (iteratee === null) {
    throw new Error('Second argument should not be NULL!');
  } 

  if (!(typeof iteratee === 'function') && !(typeof iteratee === 'string')) {
    throw new Error('Second argument should be a FUNCTION or STRING!');
  }
   
    
  let res = [];

  if (collection instanceof Array) {
    for (let item of collection) {
      if ((item instanceof Object)) {
        for (let key in item) {
          if (key === iteratee) {
            res = [...res, item[key]];
          }
        }
      } else {
        res = [...res, iteratee(item)];
      }
    }
  } else {
    if (iteratee instanceof Function) {
      for (let item of Object.values(collection)) {
        res = [...res, iteratee(item)];
      }
    } else {
      for (let key in collection) {
        if (key === iteratee) {
          res = [...res, collection[key]];
        }
      }
    }
  }

  return res;
}

module.exports = map;
  