const assert = require('chai').assert;
const tail = require("../tail");

describe("slices the first index of an array and return a new array with the rest", () => {
  it("returns 2 for [Hello, Lighthouse, Labs].length", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
});