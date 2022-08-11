const toPairs = (object) => {
  if (!(object instanceof Object)) throw new Error('First argument should be an OBJECT!');
  if (!Object.keys(object).length) throw new Error('OBJECT is empty!');

  let res = [];

  for (let key in object) {
    res = [...res, [key, object[key]]];
  }

  return res;
}

console.log(toPairs({ 'a': 1, 'b': 2, 'c': 3 }));

module.exports = toPairs;
    