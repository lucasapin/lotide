const assert = require('chai').assert;
const eqArrays = require("../eqArrays");

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
describe("compares two arrays", () => {
  it("should return true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});