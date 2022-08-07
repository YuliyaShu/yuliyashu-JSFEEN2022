const compact = require("../compact.js");

const firstArg = [1, 'string', null, {}, undefined, false, NaN];
const positiveResult = [
    {args : [0, 1, false, 2, '', 3], result : [1, 2, 3]},
    {args : [[1 ,2], undefined, 'string', NaN, null], result : [[1, 2], 'string']},
    {args : [false, true, {}, [], 0, [5, 'string'], "", 87], result : [true, {}, [], [5, 'string'], 87]}
  ];

describe('Compact method tests', () => {

    test('First arg is an array', () => {
        firstArg.forEach((item) => expect(() => compact(item)).toThrowError('First argument should be an ARRAY!'));
      });
    
      test('Array is not empty', () => {
        expect(() => compact([])).toThrowError('ARRAY is empty!');
      });

      test('Result is an array', () => {
        expect(compact([1])).toBeInstanceOf(Array);
      });

      test('positive result', () => {
        positiveResult.forEach((item) => expect(compact(item.args)).toEqual(item.result));
      })
            
})
