const eqArrays = require("../eqArrays");
const assert = require('chai').assert;
const middle = require("../middle");


  describe("returns an array with the number in the middle index, if the array.length is greater than 2 and even, returns an array with the numbers in the two middle indexes", () => {
    it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
    });
  });





