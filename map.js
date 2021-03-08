const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    }
  return results;
}

// assertArraysEqual(map(words, word => word[1]), ['r', 'o', 'o', 'a', 'o']);
module.exports = map;