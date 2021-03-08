const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}.`);
  }   else {
    console.log(`😩😩😩 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

const countLetters = function(str) {
const letters = {};
for(const char of str){
  if(char !== " ") {
  if(letters[char]){
    letters[char] += 1;
  } else {
    letters[char] = 1;
  }
  } 
}
return letters;
// You can use for...of loops with strings.
}
module.exports = countLetters;
// console.log(countLetters("my name is lucas"));
// console.log(countLetters("lighthouse in the house"));


