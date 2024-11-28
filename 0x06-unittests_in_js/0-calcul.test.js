const calculateNumber = require("./0-calcul.js");
const assert = require("assert");

describe('calculateNumber', function () {
  const testCases = [
    { a: 1, b: 3, expected: 4 },
    { a: 2, b: -3, expected: -1 },
    { a: -5, b: 8, expected: 3 },
    { a: -7, b: -4, expected: -11 },
    { a: 1.2, b: 4, expected: 5 },
  ];

  testCases.forEach(({ a, b, expected }) => {
    it(`should return ${expected} for inputs ${a} and ${b}`, function () {
      assert.strictEqual(calculateNumber(a, b), expected);
    });
  });
});
