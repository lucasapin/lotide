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
    

  // assertArraysEqual([1, 2, 3, 5], [1, 2, 3]);
  // console.log(middle([1,2,3,4,5,6]));
  // console.log(middle([7,8,3,1,6,9]));
  // console.log(middle([1,2,3,4,5,6,7,8,9,10]));
  // console.log(middle([1,2,3,4,5,6,7,8,9]));
  // console.log(middle([1,2,]));
  assertArraysEqual(middle([1,2,3,4,5,6,7]), [3]);





