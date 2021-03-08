const middle = function(arr) {
  const returnedArray1 = [];
  const newArray = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    returnedArray1.push(arr[Math.floor(arr.length / 2)]);
    return returnedArray1;
  } else {
    newArray.push(arr[((arr.length / 2) - 1)]);
    newArray.push(arr[(arr.length / 2)]);
    return newArray;
  }
};
module.exports = middle;



