const pick = require("../pick.js");

const firstArg = [1, 'string', undefined, false, NaN];
const secondArg = [{}, null, NaN, false, 5];
const positiveResult = [
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }], result : {}},
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }, 'b'], result : { 'b': '2' }},
  {args : [{ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']], result : { 'a': 1, 'c': 3 }}
];

describe('Pick method tests', () => {
  
  test('First arg is an object', () => {
    firstArg.forEach((item) => expect(() => pick(item)).toThrowError('First argument should be an OBJECT!'));
  });

  test('Object is not empty', () => {
    expect(() => pick({})).toThrowError('OBJECT is empty!');
  });

  test('Second arg is a string or an array of strings', () => {
    secondArg.forEach((item) => expect(() => pick({id: 1}, item)).toThrowError('Second argument should be a STRING or an ARRAY of STRINGS!'));
  });

  test('Result is an object', () => {
    expect(pick({id: 1})).toBeInstanceOf(Object);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(pick(item.args[0], item.args[1])).toEqual(item.result));
  });
  
})