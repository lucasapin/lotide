const assert = require('chai').assert;
const head = require('../head');

describe("#finds the first index of an array", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '3' for [3, 4, 5, 6]", () => {
    assert.strictEqual(head([3]), 3); 
  });
});