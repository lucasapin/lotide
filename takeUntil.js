const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log(item);
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  
  return results;
};

module.exports = takeUntil;
