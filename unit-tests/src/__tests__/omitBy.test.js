const omitBy = require("../omitBy.js");

const firstArg = [1, 'string', undefined, false, NaN];
const secondArg = [NaN, false, 0, -8, [], {}, 'string'];
const positiveResult = [
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }], result : { 'a': 1, 'b': '2', 'c': 3 }},
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }, (item) => item === '2'], result : { 'a': 1, 'c': 3 }},
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }, (item) => Number.isInteger(item)], result : { 'b': '2' }}
];

describe('OmitBy method tests', () => {
  
  test('First arg is an object', () => {
    firstArg.forEach((item) => expect(() => omitBy(item)).toThrowError('First argument should be an OBJECT!'));
  });

  test('Object is not empty', () => {
    expect(() => omitBy({})).toThrowError('OBJECT is empty!');
  });

  test('Predicate is a function', () => {
    secondArg.forEach((item) => expect(() => omitBy([1], item)).toThrowError('Second argument should be a FUNCTION!'));
  });

  test('Result is an object', () => {
    expect(omitBy({id: 1})).toBeInstanceOf(Object);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(omitBy(item.args[0], item.args[1])).toEqual(item.result));
  })
  
})