const chunk = require("../index.js");

describe('Chunk method tests', () => {
  test('111', () => {
    //const result = chunk([], 2)
    //expect(result).toEqual(42)
    expect(() => chunk(1,1)).toThrowError();
    })
})