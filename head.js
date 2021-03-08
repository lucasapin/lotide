const assertEqual = require("./assertEqual");

const head = function(array) {
  return array[0];
}

assertEqual(head([1,2,3].length),3);
module.exports = head;