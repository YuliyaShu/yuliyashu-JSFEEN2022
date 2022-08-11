const merge = require("../merge.js");

const firstArg = [1, 'string', undefined, false, NaN];
const positiveResult = [
  {args : [{'a': [{ 'b': 2 }, { 'd': 4 }]}, {'a': [{ 'c': 3 }, { 'e': 5 }]}], result : { a: [ { b: 2, c: 3 }, { d: 4, e: 5 } ] }},
  {args : [{'a' : 1, 'b' : 2}, {'c' : 3}, {'b' : 5, 'd' : 4}], result : { a: 1, b: 5, c: 3, d: 4 }},
  {args : [{'a' : [1], b : [2, 3]}, {'a' : [77, 88]}, {'b' : [99]}, {'c' : [100]}], result : { a: [ 77, 88 ], b: [ 99, 3 ], c: [ 100 ] }},
  {args : [{'a' : [[1]], 'b' : {'c' : 2}}, {'a' : [[100]], 'b' : {'c' : 200}}], result : { a: [ [ 100 ] ], b: { c: 200 } }}
];

describe('Merge method tests', () => {
  
  test('First arg is an object', () => {
    firstArg.forEach((item) => expect(() => merge(item)).toThrowError('First argument should be an OBJECT!'));
  });

  test('Source is an object', () => {
    expect(() => merge({}, 'str')).toThrowError('Sources arguments should be OBJECTS!');
  });

  test('Result is an object', () => {
    expect(merge({id: 1})).toBeInstanceOf(Object);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(merge(...item.args)).toEqual(item.result));
  })
  
})