const take = require("../take.js");

const firstArg = [1, 'string', null, {}, undefined, false, NaN];
const secondArg = ['string', {}, [], null, NaN, false];
const positiveResult = [
  {args : [['a', 'b', 'c'], 2], result : ['a', 'b']},
  {args : [[1, 6, 8, 5, 78]], result : [1]},
  {args : [[[1, 2], {id: 5}, 'string'], 0], result : []},
  {args : [[[1, 2], {id: 5}, 'string'], 4], result : [[1, 2], {id: 5}, 'string']}
];

describe('Take method tests', () => {
  
  test('First arg is an array', () => {
    firstArg.forEach((item) => expect(() => take(item)).toThrowError('First argument should be an ARRAY!'));
  });

  test('Array is not empty', () => {
    expect(() => take([])).toThrowError('ARRAY is empty!');
  });

  test('N is an Integer', () => {
    secondArg.forEach((item) => expect(() => take([1], item)).toThrowError('Second argument should be an INTEGER!'));
  });

  test('N is not a negative integer', () => {
    expect(() => take([1], -5)).toThrowError('N should not be a NEGATIVE!');
  });

  test('Result is an array', () => {
    expect(take([1])).toBeInstanceOf(Array);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(take(item.args[0], item.args[1])).toEqual(item.result));
  })
  
})