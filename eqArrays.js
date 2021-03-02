const eqArrays = function(firstArr, secondArr) {
for(var i = 0; i < firstArr.length; i++){
}
}

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}.`);
  }   else {
    console.log(`😩😩😩 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);