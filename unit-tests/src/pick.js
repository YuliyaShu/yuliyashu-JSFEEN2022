const pick = (object, paths) => {
    if (!(object instanceof Object)) {
      throw new Error('First argument should be an OBJECT!');
    } 

    if (!Object.keys(object).length) {
      throw new Error('OBJECT is empty!');
    } 

    if (!(paths === undefined)       &&
        !(typeof paths === 'string') && 
        !(paths instanceof Array)) {
          throw new Error('Second argument should be a STRING or an ARRAY of STRINGS!');
    } 
  
    if (paths === undefined) {
      return {};
    } 
    
    let res = Object.assign(object);
    let flag = false;
  
    for (let key in object) {
      if (typeof paths === 'string') {
        if (key !== paths) {
          delete res[key];
        } 
      } else {
        flag = false;
        for (path of paths) {
          if (key === path) {
            flag = true;
          } 
        }
        if (!flag) {
          delete res[key];
        } 
      }
    }
  
    return res;
  }
  
  module.exports = pick;
    