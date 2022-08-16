const toPairs = require("../toPairs.js");

const firstArg = [1, 'string', undefined, false, NaN];
const positiveResult = [
  {args : [{ 'a': 1, 'b': 2, 'c': 3 }], result : [['a', 1], ['b', 2], ['c', 3]]},
  {args : [{ 'a': '1', 'b': '2', 'c': '3' }], result : [['a', '1'], ['b', '2'], ['c', '3']]},
  {args : [{ 'a': [1], 'b': [2], 'c': [3] }], result : [['a', [1]], ['b', [2]], ['c', [3]]]}
];

describe('ToPairs method tests', () => {
  
  test('First arg is an object', () => {
    firstArg.forEach((item) => expect(() => toPairs(item)).toThrowError('First argument should be an OBJECT!'));
  });

  test('Object is not empty', () => {
    expect(() => toPairs({})).toThrowError('OBJECT is empty!');
  });

  test('Result is an array', () => {
    expect(toPairs({'a': 1})).toBeInstanceOf(Array);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(toPairs(item.args[0])).toEqual(item.result));
  });

})