const includes = (collection, value, fromIndex = 0) => {
  if (!(typeof collection === 'object') && !(typeof collection === 'string')) {
    throw new Error('First argument should be a COLLECTION or a STRING!');
  } 

  if (((collection instanceof Array || (typeof collection === 'string')) && !collection.length) || (collection instanceof Object && !Object.keys(collection).length)) {
    throw new Error('COLLECTION is empty!');
  }
    
  if (value === null) {
    throw new Error('Second argument should not be NULL!');
  } 

  if (!Number.isInteger(fromIndex)) {
    throw new Error('Third argument should be an INTEGER!');
  } 

  if (fromIndex < 0) {
    throw new Error('FromIndex should not be a NEGATIVE!');
  } 
    
  let res = false;

  if (collection instanceof Array) {
    for (let i = fromIndex; i < collection.length; i++) {
      res = (collection[i] === value);
      if (res) {
        return res;
      } 
    }
  } else if (collection instanceof Object) {
    let arr = Object.values(collection)
    for (let i = fromIndex; i < arr.length; i++) {
      res = (arr[i] === value);
      if (res) {
        return res;
      } 
    }
  } else if (typeof collection === 'string') {
    res = collection.includes(value, fromIndex);
  }
  return res;
}

module.exports = includes;
  