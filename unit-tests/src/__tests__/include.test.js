const includes = require("../includes.js");

const firstArg = [1, undefined, false, NaN];
const thirdArg = ['string', {}, [], null, NaN, false];
const emptyCollection = [[], {}, ''];

const positiveResultArray = [
  {args : [[1, 2, 3], 1], result : true},
  {args : [[1, 2, 3], 1, 2], result : false},
  {args : [[1, 2, 3], 3, 1], result : true},
  {args : [[1, 2, 3], 5], result : false}
];

const positiveResultObject = [
  {args : [{ 'a': 1, 'b': 2 }, 1], result : true},
  {args : [{ 'a': 1, 'b': 2 }, 1, 1], result : false},
  {args : [{ 'a': 1, 'b': 2 }, 3], result : false},
  {args : [{ 'a': 1, 'b': 2 }, 2, 1], result : true}
];

const positiveResultString = [
  {args : ['abcd', 'bc'], result : true},
  {args : ['abcd', 'bc', 1], result : true},
  {args : ['abcd', 'bc', 2], result : false},
  {args : ['abcd', 'e'], result : false},
];

describe('Includes method tests', () => {
  
  test('First arg is an collection', () => {
    firstArg.forEach((item) => expect(() => includes(item)).toThrowError('First argument should be a COLLECTION or a STRING!'));
  });

  test('COLLECTION is not empty', () => {
    emptyCollection.forEach((item) => expect(() => includes(item)).toThrowError('COLLECTION is empty!'));
  });

  test('Value is not null', () => {
    expect(() => includes([1], null)).toThrowError('Second argument should not be NULL!');
  });

  test('FromIndex is an Integer', () => {
    thirdArg.forEach((item) => expect(() => includes([1], 'string', item)).toThrowError('Third argument should be an INTEGER!'));
  });

  test('FromIndex is  not a negative', () => {
    expect(() => includes([1], 'string', -5)).toThrowError('FromIndex should not be a NEGATIVE!');
  });

  test('positive result for Array', () => {
    positiveResultArray.forEach((item) => expect(includes(item.args[0], item.args[1], item.args[2])).toEqual(item.result));
  })
  
  test('positive result for string', () => {
    positiveResultString.forEach((item) => expect(includes(item.args[0], item.args[1], item.args[2])).toEqual(item.result));
  })

  test('positive result for object', () => {
    positiveResultObject.forEach((item) => expect(includes(item.args[0], item.args[1], item.args[2])).toEqual(item.result));
  })

})