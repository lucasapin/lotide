const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual")
  
  
  // The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
  const middle = function(arr){
    const returnedArray1 = [];
    const newArray = [];
    if(arr.length <= 2){
      return [];
    } else if(arr.length%2 !== 0){
      returnedArray1.push(arr[Math.floor(arr.length/2)]);
      return returnedArray1;
    } else {
      newArray.push(arr[((arr.length/2)-1)]);
      newArray.push(arr[(arr.length/2)]);
      return newArray;
      }
    }
    module.exports = middle;

    console.log(middle([3, 4, 5, 6, 7]));

