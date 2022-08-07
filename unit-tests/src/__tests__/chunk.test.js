const chunk = require("../chunk.js");

const firstArg = [1, 'string', null, {}, undefined, false, NaN];
const secondArg = ['string', {}, [], null, NaN, false];
const positiveResult = [
  {args : [['a', 'b', 'c'], 2], result : [['a', 'b'], ['c']]},
  {args : [[1, 6, 8, 5, 78], 3], result : [[1, 6, 8], [5, 78]]},
  {args : [[[1, 2], {id: 5}, 'string'], 5], result : [[[1, 2], {id: 5}, 'string']]}
];

describe('Chunk method tests', () => {
  
  test('First arg is an array', () => {
    firstArg.forEach((item) => expect(() => chunk(item)).toThrowError('First argument should be an ARRAY!'));
  });

  test('Array is not empty', () => {
    expect(() => chunk([])).toThrowError('ARRAY is empty!');
  });

  test('Size is an Integer', () => {
    secondArg.forEach((item) => expect(() => chunk([1], item)).toThrowError('Second argument should be an INTEGER!'));
  });

  test('Size is a positive integer', () => {
    expect(() => chunk([1], -5)).toThrowError('SIZE should be a POSITIVE!');
  });

  test('Result is an array', () => {
    expect(chunk([1])).toBeInstanceOf(Array);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(chunk(item.args[0], item.args[1])).toEqual(item.result));
  })
  
})