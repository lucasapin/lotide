const eqArrays = function(firstArr, secondArr) {
  if(firstArr.length !== secondArr.length){
    return false
  } else {
    for(var i = 0; i < firstArr.length; i++){
      if(firstArr[i] !== secondArr[i]){
    return false
      }  
    }
  return true;
    } 
}
  
  
  const assertArraysEqual = function(arrOne, arrTwo) {
    if (eqArrays(arrOne, arrTwo)){
      console.log("😁 Assertion Passed:" , arrOne , "===" , arrTwo);
  
    } else {
      console.log("😩 Assertion Failed:" , arrOne , "!==" , arrTwo);
    }
  
  }

  const letterPositions = function(sentence) {
    const results = {};
    
    for(let i = 0; i < sentence.length; i++){
      if(sentence[i] !== ' ') {
        if(! results[sentence[i]]){
          results[sentence[i]] = [i];
        } else {
          results[sentence[i]].push(i);
          }
      }
    }
    return results;
  }
  
  module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").o, [4]);
// assertArraysEqual(letterPositions("hello").h, [1]);



