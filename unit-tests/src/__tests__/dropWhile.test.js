const dropWhile = require("../dropWhile.js");

const firstArg = [1, 'string', null, {}, undefined, false, NaN];
const secondArg = [NaN, false, 0, -8, undefined];

const positiveResultFunc = [
  {args : [['a', 'b', 'c'], (item)=> item === 'a'], result : ['b', 'c']},
  {args : [[1, 6, 8, 5, 78], (item)=> item < 8], result : [8, 5, 78]},
  {args : [[{id: 5}, {id: 25}, {id: 44}], (item)=> item.id < 0], result : [{id: 5}, {id: 25}, {id: 44}]}
];

const positiveResultArray = [
  {args : [
    [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ], ['active', false]],
  result : [
    { 'user': 'pebbles', 'active': true }
  ]},
  {args : [
    [
      { 'user': 'barney',  'active': false },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': true }
    ], ['user', 'barney']],
  result : [
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ]}
];

const positiveResultString = [
  {args : [
    [
      { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true },
      { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false },
      { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
    ], 'booked'],
  result : [
    { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false },
    { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
]}
];
const positiveResultObject = [
  {args : [
    [
      { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true },
      { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false },
      { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
    ],
      { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true }],
  result : [
    { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false },
    { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
  ]},
  {args : [
    [
      { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true },
      { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false },
      { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
    ],
      { 'id': 1,  'name': 'mazda', 'year': 1985}],
  result : [
    { 'id': 1,  'name': 'mazda', 'year': 1985, 'booked': true },
    { 'id': 2,  'name': 'bmw', 'year': 1992, 'booked': false },
    { 'id': 3,  'name': 'audi', 'year': 1998, 'booked': true }
  ]}
];

describe('DropWhile method tests', () => {
  
  test('First arg is an array', () => {
    firstArg.forEach((item) => expect(() => dropWhile(item)).toThrowError('First argument should be an ARRAY!'));
  });

  test('Array is not empty', () => {
    expect(() => dropWhile([])).toThrowError('ARRAY is empty!');
  });

  test('Predicate is not null', () => {
    expect(() => dropWhile([1], null)).toThrowError('Second argument should not be NULL!');
  });

  test('Predicate is a function/object/array/string', () => {
    secondArg.forEach((item) => expect(() => dropWhile([1], item)).toThrowError('Second argument should be a FUNCTION, OBJECT, ARRAY or STRING!'));
  });

  test('Result is an array', () => {
    expect(dropWhile([1], 'str')).toBeInstanceOf(Array);
  });

  test('positive result for function', () => {
    positiveResultFunc.forEach((item) => expect(dropWhile(item.args[0], item.args[1])).toEqual(item.result));
  });

  test('positive result for Array', () => {
    positiveResultArray.forEach((item) => expect(dropWhile(item.args[0], item.args[1])).toEqual(item.result));
  });
  
  test('positive result for string', () => {
    positiveResultString.forEach((item) => expect(dropWhile(item.args[0], item.args[1])).toEqual(item.result));
  });

  test('positive result for object', () => {
    positiveResultObject.forEach((item) => expect(dropWhile(item.args[0], item.args[1])).toEqual(item.result));
  });

})