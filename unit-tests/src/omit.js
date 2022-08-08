const omit = (object, paths) => {
    if (!(object instanceof Object)) throw new Error('First argument should be an OBJECT!');
    if (!Object.keys(object).length) throw new Error('OBJECT is empty!');
    if (!(paths === undefined)       &&
        !(typeof paths === 'string') && 
        !(paths instanceof Array)) throw new Error('Second argument should be a STRING or an ARRAY of STRINGS!');
  
    let res = Object.assign(object);
    if (paths === undefined) return res;
  
    for (let key in object) {
      if (typeof paths === 'string') {
        if (key === paths) delete res[key];
      } else
        for (path of paths) {
          if (key === path) delete res[key];
        }
    }
  
    return res;
  }
  
  module.exports = omit;
    