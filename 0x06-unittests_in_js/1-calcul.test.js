const calculateNumber = require("./1-calcul.js");
const assert = require("assert");

describe('calculateNumber', function () {
  const testCases = [
    { a: 1, b: 3, type: "SUM", expected: 4 },
    { a: 54, b: 3, type: "SUBTRACT", expected: 51 },
    { a: 51, b: 17, type: "DIVIDE", expected: 3 },
    { a: 54, b: -43, type: "SUM", expected: 11 },
    { a: 2, b: -3, type: "SUBTRACT", expected: 5 },
    { a: 81, b: -9, type: "DIVIDE", expected: -9 },
    { a: -65, b: 5, type: "SUM", expected: -60 },
    { a: -15, b: 5, type: "DIVIDE", expected: -3 },
    { a: -7, b: 4, type: "SUBTRACT", expected: -11 },
    { a: -76, b: -14, type: "SUM", expected: -90 },
    { a: -35, b: -15, type: "SUBTRACT", expected: -20 },
    { a: -24, b: -8, type: "DIVIDE", expected: 3 },
    { a: 1.2, b: 4, type: "SUM", expected: 5 },
    { a: 1.4, b: 4.5, type: "SUM", expected: 6 },
    { a: 1.4, b: 0, type: "DIVIDE", expected: "Error" },
    { a: 8, b: 0, type: "DIVIDE", expected: "Error" },
  ];

  testCases.forEach(({ a, b, type, expected }) => {
    it(`should return ${expected} for inputs ${a} and ${b} and type ${type}`, function () {
      assert.strictEqual(calculateNumber(a, b, type), expected);
    });
  });
});

