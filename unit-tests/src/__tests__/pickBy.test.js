const pickBy = require("../pickBy.js");

const firstArg = [1, 'string', undefined, false, NaN];
const secondArg = [NaN, false, 0, -8, [], {}, 'string'];
const positiveResult = [
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }], result : { 'a': 1, 'b': '2', 'c': 3 }},
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }, (item) => item === '2'], result : { 'b': '2' }},
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }, (item) => Number.isInteger(item)], result : { 'a': 1, 'c': 3 }}
];

describe('PickBy method tests', () => {
  
  test('First arg is an object', () => {
    firstArg.forEach((item) => expect(() => pickBy(item)).toThrowError('First argument should be an OBJECT!'));
  });

  test('Object is not empty', () => {
    expect(() => pickBy({})).toThrowError('OBJECT is empty!');
  });

  test('Predicate is a function', () => {
    secondArg.forEach((item) => expect(() => pickBy([1], item)).toThrowError('Second argument should be a FUNCTION!'));
  });

  test('Result is an object', () => {
    expect(pickBy({id: 1})).toBeInstanceOf(Object);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(pickBy(item.args[0], item.args[1])).toEqual(item.result));
  })
  
})