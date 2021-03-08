const without = function(sourceArray, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let mark = 0;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        mark = 1;
      }
    }
    if (mark === 0) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};
module.export = without;
  