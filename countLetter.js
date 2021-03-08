const countLetters = function(str) {
  const letters = {};
  for (const char of str) {
    if (char !== " ") {
      if (letters[char]) {
        letters[char] += 1;
      } else {
        letters[char] = 1;
      }
    }
  }
  return letters;
};
module.exports = countLetters;

