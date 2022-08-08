const find = require("../find.js");

const firstArg = [1, 'string', undefined, false, NaN];
const secondArg = [NaN, false, 0, -8, undefined];
const thirdArg = ['string', {}, [], null, NaN, false];

const positiveResultFunc = [
  {args : [['a', 'b', 'c'], (item) => item === 'b'], result : 'b'},
  {args : [[1, 6, 8, 5, 78], (item) => item > 8], result : 78},
  {args : [[{id: 5}, {id: 25}, {id: 44}], (item) => item.id % 5 === 0], result : {id: 5}},
  {args : [[1, 6, 8, 5, 78], (item) => item = 0], result : undefined}
];

const positiveResultArray = [
  {args : [
    [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ], ['active', false]],
  result : { 'user': 'barney',  'active': false }},
  {args : [
    [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ], ['user', 'fred']],
  result : { 'user': 'fred',  'active': false }}
];

const positiveResultString = [
  {args : [
    [
      { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true },
      { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false },
      { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
    ], 'booked', 1],
  result : { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }}
];

const positiveResultObject = [
  {args : [
    [
      { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true },
      { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false },
      { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
    ],
      { 'id': 2}],
  result : { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false }},
  {args : [
    [
      { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true },
      { 'id': 2,  'name': 'bmw', 'year': 1985, 'booked': false },
      { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
    ],
      { 'year': 1985, 'booked': true}],
  result : { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true }}
];

describe('Find method tests', () => {
  
  test('First arg is an array', () => {
    firstArg.forEach((item) => expect(() => find(item)).toThrowError('First argument should be a COLLECTION!'));
  });

  test('COLLECTION is not empty', () => {
    expect(() => find([])).toThrowError('COLLECTION is empty!');
  });

  test('Predicate is not null', () => {
    expect(() => find([1], null)).toThrowError('Second argument should not be NULL!');
  });

  test('Predicate is a function/object/array/string', () => {
    secondArg.forEach((item) => expect(() => find([1], item)).toThrowError('Second argument should be a FUNCTION, OBJECT, ARRAY or STRING!'));
  });

  test('FromIndex is an Integer', () => {
    thirdArg.forEach((item) => expect(() => find([1], 'string', item)).toThrowError('Third argument should be an INTEGER!'));
  });

  test('FromIndex is a positive integer', () => {
    expect(() => find([1], 'string', -5)).toThrowError('FromIndex should not be a NEGATIVE!');
  });

  test('positive result for function', () => {
    positiveResultFunc.forEach((item) => expect(find(item.args[0], item.args[1], item.args[2])).toEqual(item.result));
  })

  test('positive result for Array', () => {
    positiveResultArray.forEach((item) => expect(find(item.args[0], item.args[1], item.args[2])).toEqual(item.result));
  })
  
  test('positive result for string', () => {
    positiveResultString.forEach((item) => expect(find(item.args[0], item.args[1], item.args[2])).toEqual(item.result));
  })

  test('positive result for object', () => {
    positiveResultObject.forEach((item) => expect(find(item.args[0], item.args[1], item.args[2])).toEqual(item.result));
  })

})