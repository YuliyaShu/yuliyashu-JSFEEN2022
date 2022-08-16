const pickBy = (object, predicate) => {
    if (!(object instanceof Object)) {
      throw new Error('First argument should be an OBJECT!');
    } 

    if (!Object.keys(object).length) {
      throw new Error('OBJECT is empty!');
    } 

    if (!(predicate === undefined) && !(typeof predicate === 'function')) {
      throw new Error('Second argument should be a FUNCTION!');
    } 

    let res = Object.assign(object);
    if (predicate === undefined) {
      return res;
    } 
  
    for (let key in object) {
      if (!predicate(object[key])) {
        delete res[key];
      } 
    }
  
    return res;
  }
  
  module.exports = pickBy;
      