const eqArrays = require("../eqArrays");
const assert = require('chai').assert;
const middle = require("../middle");

  // assertArraysEqual([1, 2, 3, 5], [1, 2, 3]);
  // console.log(middle([1,2,3,4,5,6]));
  // console.log(middle([7,8,3,1,6,9]));
  // console.log(middle([1,2,3,4,5,6,7,8,9,10]));
  // console.log(middle([1,2,3,4,5,6,7,8,9]));
  // console.log(middle([1,2,]));
  // assertArraysEqual(middle([1,2,3,4,5,6,7]), [3]);

  describe("returns an array with the number in the middle index, if the array.length is greater than 2 and even, returns an array with the numbers in the two middle indexes", () => {
    it("returns 4 for [1, 2, 3, 4, 5, 6, 7]", () => {
      assert.strictEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
    });
    it("returns 5 for [3, 4, 5, 6, 7]", () => {
      assert.strictEqual(middle([3, 4, 5, 6, 7]), [5]); 
    });
  });





