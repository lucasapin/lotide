const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}.`);
  }   else {
    console.log(`😩😩😩 Assertion Failed: ${actual} !== ${expected}.`);
  }
};
const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(1, "1");
assertEqual("Lucas", "Lucas");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
const result1 = tail([]);
console.log(result1);
