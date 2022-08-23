const find = (collection, predicate, fromIndex = 0) => {
  if (!(typeof collection === 'object')) {
    throw new Error('First argument should be a COLLECTION!');
  } 

  if (collection === null || !collection.length) {
    throw new Error('COLLECTION is empty!');
  }

  if (predicate === null) {
    throw new Error('Second argument should not be NULL!');
  } 

  if (!(typeof predicate === 'function') &&
      !(typeof predicate === 'object')   &&
      !(typeof predicate === 'string')) {
        throw new Error('Second argument should be a FUNCTION, OBJECT, ARRAY or STRING!');
  } 

  if (!Number.isInteger(fromIndex)) {
    throw new Error('Third argument should be an INTEGER!');
  } 

  if (fromIndex < 0) {
    throw new Error('FromIndex should not be a NEGATIVE!');
  } 
    
  let res;
  let flag = true;
  let item;


  for (let i = fromIndex; i < collection.length; i++) {
    flag = false;
    item = collection[i];
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
      return item;
    } 
  }

  return res;

}

module.exports = find;
  