const drop = require("../drop.js");

const firstArg = [1, 'string', null, {}, undefined, false, NaN];
const secondArg = ['string', {}, [], null, NaN, false];
const positiveResult = [
  {args : [['a', 'b', 'c'], 2], result : ['c']},
  {args : [[1, 6, 8, 5, 78]], result : [6, 8, 5, 78]},
  {args : [[[1, 2], {id: 5}, 'string'], 0], result : [[1, 2], {id: 5}, 'string']},
  {args : [[[1, 2], {id: 5}, 'string'], 4], result : []}
];

describe('Drop method tests', () => {
  
  test('First arg is an array', () => {
    firstArg.forEach((item) => expect(() => drop(item)).toThrowError('First argument should be an ARRAY!'));
  });

  test('Array is not empty', () => {
    expect(() => drop([])).toThrowError('ARRAY is empty!');
  });

  test('N is an Integer', () => {
    secondArg.forEach((item) => expect(() => drop([1], item)).toThrowError('Second argument should be an INTEGER!'));
  });

  test('Size is not a negative integer', () => {
    expect(() => drop([1], -5)).toThrowError('SIZE should not be a NEGATIVE!');
  });

  test('Result is an array', () => {
    expect(drop([1])).toBeInstanceOf(Array);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(drop(item.args[0], item.args[1])).toEqual(item.result));
  })
  
})