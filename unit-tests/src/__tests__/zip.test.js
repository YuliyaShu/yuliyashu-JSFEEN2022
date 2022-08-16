const zip = require("../zip.js");

const firstArg = [1, 'string', null, {}, undefined, false, NaN];
const positiveResult = [
  {args : [['a', 'b', 'c']], result : [['a'], ['b'], ['c']]},
  {args : [['a', 'b'], [1, 2], [true, false]], result : [['a', 1, true], ['b', 2, false]]},
  {args : [['a'], ['b'], ['c']], result : [['a', 'b', 'c']]}
];

describe('Zip method tests', () => {
  
  test('First arg is an array', () => {
    firstArg.forEach((item) => expect(() => zip(item)).toThrowError('All arguments should be ARRAYS!'));
  });

  test('Arrays is not empty', () => {
    expect(() => zip([])).toThrowError('ARRAY is empty!');
  });

  test('Arrays\' legth is equal', () => {
    expect(() => zip([1], [1, 2])).toThrowError('The Length of all ARRAYS should be equal!');
  });

  test('Result is an array', () => {
    expect(zip([1])).toBeInstanceOf(Array);
  });

  test('positive result', () => {
    positiveResult.forEach((item) => expect(zip(...item.args)).toEqual(item.result));
  });
  
})