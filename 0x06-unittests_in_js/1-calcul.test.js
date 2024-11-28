const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe('calculateNumber', function () {
  const testCases = [
    { a: 1, b: 3, type: "SUM", expected: 4 },
    { a: 2, b: -3, type: "SUBTRACT", expected: -5 },
    { a: -15, b: 5, type: "DIVIDE", expected: -3 },
    { a: -7, b: -4, type: "SUBTRACT", expected: 3 },
    { a: 1.2, b: 4, type: "SUM", expected: 5 },
    { a: 8, b: 0, type: "DIVIDE", expected: "Error" },
  ];

  testCases.forEach(({ a, b, type, expected }) => {
    it(`should return ${expected} for inputs ${a} and ${b} and type ${type}`, function () {
      assert.strictEqual(calculateNumber(a, b, type), expected);
    });
  });
});

