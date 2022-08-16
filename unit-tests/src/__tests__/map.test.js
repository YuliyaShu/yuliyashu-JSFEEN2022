const map = require("../map.js");

const firstArg = [1, undefined, false, NaN, 'string'];
const secondArg = [NaN, false, 0, -8, undefined, [1], {id: 1}];
const emptyCollection = [[], {}];

function square(n) {
  return n * n;
}

const positiveResultArray = [
  {args : [[4, 8], square], result : [16, 64]},
  {args : [[1, 2, 3], square], result : [1, 4, 9]},
  {args : [[4, 8], (val) => val + 1], result : [5, 9]},
  {args : [['a', 'b'], (val) => val.concat('c')], result : ['ac', 'bc']},
  {args : [[{ 'user': 'Alex'}, {'user': 'Fred', 'id': 57 }], 'user'], result : ['Alex', 'Fred']}
];

const positiveResultObject = [
  {args : [{ 'a': 4, 'b': 8 }, square], result : [16, 64]},
  {args : [{ 'a': 1, 'b': 2, 'c': 3 }, square], result : [1, 4, 9]},
  {args : [{ 'a': 4, 'b': 8 }, (val) => val + 1], result : [5, 9]},
  {args : [{ 'user': 'Alex', 'id': 57 }, 'id'], result : [57]}
];

describe('Map method tests', () => {
  
  test('First arg is an collection', () => {
    firstArg.forEach((item) => expect(() => map(item)).toThrowError('First argument should be a COLLECTION!'));
  });

  test('COLLECTION is not empty', () => {
    emptyCollection.forEach((item) => expect(() => map(item)).toThrowError('COLLECTION is empty!'));
  });

  test('Iteratee is not null', () => {
    expect(() => map([1], null)).toThrowError('Second argument should not be NULL!');
  });

  test('Iteratee is a function or string', () => {
    secondArg.forEach((item) => expect(() => map([1], item)).toThrowError('Second argument should be a FUNCTION or STRING!'));
  });

  test('positive result for Array', () => {
    positiveResultArray.forEach((item) => expect(map(item.args[0], item.args[1])).toEqual(item.result));
  });
  
  test('positive result for object', () => {
    positiveResultObject.forEach((item) => expect(map(item.args[0], item.args[1])).toEqual(item.result));
  });

})