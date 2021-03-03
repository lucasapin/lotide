const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
        return false;
      }
    }
    return true;
  }
};
  
  
const assertArraysEqual = function(arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo)) {
    console.log("😁 Assertion Passed:" , arrOne , "===" , arrTwo);
  
  } else {
    console.log("😩 Assertion Failed:" , arrOne , "!==" , arrTwo);
  }
  
};

const without = function(sourceArray, itemsToRemove) {
  let newArray = [];
  for(let i = 0; i < sourceArray.length; i++){
    let mark = 0;
    for(let j =0; j < itemsToRemove.length; j++){
      if (sourceArray[i] === itemsToRemove[j]) {
        mark = 1
      }
    }  
    if (mark == 0) {
      newArray.push(sourceArray[i]);
    }
    }
    return newArray;
  } 

  assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]); 
  assertArraysEqual(without([1, 2, 3], ["1", "2"]),[1, 2, 3]);
  
  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); 
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
